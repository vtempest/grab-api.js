#!/usr/bin/env node
import { grab, log } from './grab-api';
import fs from 'fs';
import path from 'path';

// Lightweight argument parser polyfill
class ArgParser {
  constructor() {
    this.commands = {};
    this.options = {};
    this.examples = [];
    this.helpText = '';
    this.versionText = '1.0.0';
  }

  usage(text) {
    this.helpText = text;
    return this;
  }

  command(pattern, desc, handler) {
    const match = pattern.match(/\$0 <(\w+)>/);
    if (match) {
      this.commands[match[1]] = { desc, handler, required: true };
    }
    return this;
  }

  option(name, opts = {}) {
    this.options[name] = opts;
    return this;
  }

  example(cmd, desc) {
    this.examples.push({ cmd, desc });
    return this;
  }

  help() {
    return this;
  }

  alias(short, long) {
    if (this.options[long]) {
      this.options[long].alias = short;
    }
    return this;
  }

  version(v) {
    if (v) this.versionText = v;
    return this;
  }

  strict() {
    return this;
  }

  parseSync() {
    const args = process.argv.slice(2);
    const result = {};
    const positional = [];
    
    // Check for help
    if (args.includes('--help') || args.includes('-h')) {
      this.showHelp();
      process.exit(0);
    }

    // Check for version
    if (args.includes('--version')) {
      console.log(this.versionText);
      process.exit(0);
    }

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      
      if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        const optName = key.slice(2);
        
        if (value !== undefined) {
          result[optName] = this.coerceValue(optName, value);
        } else if (this.options[optName]?.type === 'boolean') {
          result[optName] = true;
        } else {
          const nextArg = args[i + 1];
          if (nextArg && !nextArg.startsWith('-')) {
            result[optName] = this.coerceValue(optName, nextArg);
            i++; // Skip next arg
          } else {
            result[optName] = true;
          }
        }
      } else if (arg.startsWith('-') && arg.length === 2) {
        const shortFlag = arg[1];
        const longName = this.findLongName(shortFlag);
        
        if (longName) {
          if (this.options[longName]?.type === 'boolean') {
            result[longName] = true;
          } else {
            const nextArg = args[i + 1];
            if (nextArg && !nextArg.startsWith('-')) {
              result[longName] = this.coerceValue(longName, nextArg);
              i++;
            }
          }
        }
      } else {
        positional.push(arg);
      }
    }

    // Handle positional arguments
    if (positional.length > 0) {
      result.url = positional[0];
    }

    // Set defaults
    Object.keys(this.options).forEach(key => {
      if (result[key] === undefined && this.options[key].default !== undefined) {
        result[key] = this.options[key].default;
      }
    });

    // Validate required positional args
    if (!result.url && this.commands.url?.required) {
      console.error('Error: Missing required argument: url');
      this.showHelp();
      process.exit(1);
    }

    return result;
  }

  coerceValue(optName, value) {
    const opt = this.options[optName];
    if (!opt) return value;

    if (opt.coerce) {
      return opt.coerce(value);
    }

    switch (opt.type) {
      case 'number':
        return Number(value);
      case 'boolean':
        return value === 'true' || value === '1';
      default:
        return value;
    }
  }

  findLongName(shortFlag) {
    return Object.keys(this.options).find(key => 
      this.options[key].alias === shortFlag
    );
  }

  showHelp() {
    console.log(this.helpText || 'Usage: grab <url> [options]');
    console.log('\nPositional arguments:');
    Object.keys(this.commands).forEach(cmd => {
      console.log(`  ${cmd.padEnd(20)} ${this.commands[cmd].desc}`);
    });
    
    console.log('\nOptions:');
    Object.keys(this.options).forEach(key => {
      const opt = this.options[key];
      const flags = opt.alias ? `-${opt.alias}, --${key}` : `--${key}`;
      console.log(`  ${flags.padEnd(20)} ${opt.describe || ''}`);
    });

    if (this.examples.length > 0) {
      console.log('\nExamples:');
      this.examples.forEach(ex => {
        console.log(`  ${ex.cmd}`);
        console.log(`    ${ex.desc}`);
      });
    }
  }
}

// Create parser instance
const createParser = () => new ArgParser();

// Parse arguments with custom parser
const argv = createParser()
  .usage('Usage: grab <url> [options]')
  .command('$0 <url>', 'Fetch data from API endpoint')
  .option('x', {
    alias: 'exec',
    type: 'boolean',
    default: false,
    describe: 'Execute flag (functionality TBD)'
  })
  .option('no-save', {
    type: 'boolean',
    default: false,
    describe: 'Don\'t save output to file, just print to console'
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    describe: 'Output filename (default: output.json)',
    default: null
  })
  .option('params', {
    alias: 'p',
    type: 'string',
    describe: 'JSON string of query parameters (e.g., \'{"key":"value"}\')',
    coerce: (arg) => {
      if (!arg) return {};
      try {
        return JSON.parse(arg);
      } catch (e) {
        throw new Error(`Invalid JSON in params: ${arg}`);
      }
    }
  })
  .example('grab https://api.example.com/data', 'Fetch data and save to output.json')
  .example('grab https://api.example.com/data --no-save', 'Fetch data and print to console')
  .example('grab https://api.example.com/data -o result.json', 'Save output to result.json')
  .example('grab https://api.example.com/data -p \'{"limit":10,"page":1}\'', 'Pass query parameters')
  .help()
  .alias('h', 'help')
  .version()
  .strict()
  .parseSync();

// Extract values from parsed arguments
const { url, x: execFlag, 'no-save': noSave, output: outputFile, params = {} } = argv;
// params.debug = true;

// Validate URL
if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
  log('Error: URL must start with http:// or https://');
  process.exit(1);
}

(async () => {
  const startTime = process.hrtime(); // High-res timer
  
  try {
    const res = await grab(url, params);
    
    if (res.error) 
      log(`\n\nStatus: ❌ ${res.error}`);
    
    
    let filePath = null;
    let outputData;
    let isTextData = false;
    
    // Determine data type and prepare output
    if (typeof res.data === 'string') {
      outputData = res.data;
      isTextData = true;
    } else if (Buffer.isBuffer(res.data) || res.data instanceof Uint8Array) {
      // Binary data (like video files)
      outputData = res.data;
      isTextData = false;
    } else if (res.data instanceof Blob) {
      // Convert Blob to Buffer for file writing
      const arrayBuffer = await res.data.arrayBuffer();
      outputData = Buffer.from(arrayBuffer);
      isTextData = false;
    } else if (res.data && typeof res.data === 'object') {
      // JSON or other objects
      outputData = JSON.stringify(res.data, null, 2);
      isTextData = true;
    } else {
      // Fallback - try to stringify
      outputData = String(res.data);
      isTextData = true;
    }
    
    if (!noSave) {
      // Determine file extension based on URL or data type
      const urlPath = new URL(url).pathname;
      const urlExt = path.extname(urlPath);
      const defaultExt = isTextData ? '.json' : (urlExt || '.bin');
      
      filePath = outputFile
        ? path.resolve(outputFile)
        : path.resolve(process.cwd(), `output${defaultExt}`);
      
      // Write file with appropriate encoding
      if (isTextData) {
        fs.writeFileSync(filePath, outputData, 'utf8');
      } else {
        fs.writeFileSync(filePath, outputData);
      }
      
      // Calculate elapsed time
      const [seconds, nanoseconds] = process.hrtime(startTime);
      const elapsedMs = (seconds + nanoseconds / 1e9).toFixed(2);
      const stats = fs.statSync(filePath);
      const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);
      
      log(`⏱️ ${elapsedMs}s 📦 ${fileSizeMB}MB ✅ Saved to: ${filePath}`);
    } else {
      // For console output, only show text data
      if (isTextData) {
        // log(outputData);
      } else {
        log(`Binary data received (${outputData.length} bytes). Use --output to save to file.`);
      }
    }
  } catch (error) {
    log(`Error: ${error.message}`, {color: 'red'});
    process.exit(1);
  }
})();