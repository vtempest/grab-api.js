#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import GithubAPI from 'git0'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Github = new GithubAPI();
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function readPackageJson() {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = await readFile(packagePath, 'utf8');
    return JSON.parse(packageContent);
  } catch (error) {
    console.log('No package.json found in current directory, starting fresh...');
    return null;
  }
}

async function createCustomizeDocs(config) {
  const customizeDocsPath = path.join(process.cwd(), 'docs-config/config', 'customize-docs.js');
  
  // Ensure config directory exists
  const configDir = path.dirname(customizeDocsPath);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  const customizeDocsContent = `export default {
    name: "${config.name}",
    domain: "${config.domain}",
    typedocFolders: [
      {
        id: "${config.typedocId}",
        entryPoints: [
          "${config.entryPoints}"
        ],
      },
    ],
    gitRepoDocsPath: "${config.gitRepoDocsPath}",
    sourceLinkTemplate: "${config.sourceLinkTemplate}",
    openAPISpecPath: ${config.openAPISpecPath ? `"${config.openAPISpecPath}"` : 'false'},
    openAPIDocsOutput: "${config.openAPIDocsOutput}",
    openAPIShowSchemas: ${config.openAPIShowSchemas},
    showEditsOnGitHub: ${config.showEditsOnGitHub},
    GOOGLE_ANALYTICS_ID: ${config.googleAnalyticsId ? `"${config.googleAnalyticsId}"` : 'false'},
    compileForSubdomain: ${config.compileForSubdomain},
    tsconfig: "${config.tsconfig}",
    readme: "${config.readme}",
    sanitizeComments: ${config.sanitizeComments},
    logoURL: "${config.logoURL}",
    baseFolder: "${config.baseFolder}",
    logo: "${config.logo}",
    favicon: "${config.favicon}",
    enableFasterBuildV4: ${config.enableFasterBuildV4},
    enableReadmeAsHome: ${config.enableReadmeAsHome},
    topbar: [
      // {
      //   to: "/${config.typedocId}",
      //   label: "👋 Intro",
      //   position: "left",
      // }
    ]
}`;

  try {
    await writeFile(customizeDocsPath, customizeDocsContent);
    console.log('✅ customize-docs.js created successfully!');
    return true;
  } catch (error) {
    console.error('❌ Failed to create customize-docs.js:', error.message);
    return false;
  }
}

async function editOption(optionName, currentValue, config) {
  const optionConfigs = {
    name: {
      type: 'input',
      message: 'Enter the API documentation name:',
      validate: (input) => input.trim() ? true : 'Name is required'
    },
    domain: {
      type: 'input',
      message: 'Enter the domain for your API docs:',
      validate: (input) => {
        if (!input.trim()) return 'Domain is required';
        if (!input.startsWith('http')) return 'Domain should start with http:// or https://';
        return true;
      }
    },
    typedocId: {
      type: 'input',
      message: 'Enter the TypeDoc folder ID:',
      validate: (input) => input.trim() ? true : 'TypeDoc folder ID is required'
    },
    entryPoints: {
      type: 'input',
      message: 'Enter the TypeDoc entry points (glob pattern):',
      validate: (input) => input.trim() ? true : 'Entry points are required'
    },
    gitRepoDocsPath: {
      type: 'input',
      message: 'Enter the GitHub repository docs path:',
      validate: (input) => input.trim() ? true : 'GitHub repository docs path is required'
    },
    sourceLinkTemplate: {
      type: 'input',
      message: 'Enter the source link template:',
      validate: (input) => input.trim() ? true : 'Source link template is required'
    },
    openAPISpecPath: {
      type: 'input',
      message: 'Enter the OpenAPI spec path (or press Enter to skip):'
    },
    openAPIDocsOutput: {
      type: 'input',
      message: 'Enter the OpenAPI docs output path:'
    },
    openAPIShowSchemas: {
      type: 'confirm',
      message: 'Show OpenAPI schemas?'
    },
    showEditsOnGitHub: {
      type: 'confirm',
      message: 'Show edit links on GitHub?'
    },
    googleAnalyticsId: {
      type: 'input',
      message: 'Enter Google Analytics ID (or press Enter to skip):'
    },
    compileForSubdomain: {
      type: 'confirm',
      message: 'Compile for subdomain?'
    },
    tsconfig: {
      type: 'input',
      message: 'Enter the tsconfig path:'
    },
    readme: {
      type: 'input',
      message: 'Enter the README path:'
    },
    sanitizeComments: {
      type: 'confirm',
      message: 'Sanitize comments?'
    },
    logoURL: {
      type: 'input',
      message: 'Enter the logo URL:'
    },
    baseFolder: {
      type: 'input',
      message: 'Enter the base folder:'
    },
    logo: {
      type: 'input',
      message: 'Enter the logo path:'
    },
    favicon: {
      type: 'input',
      message: 'Enter the favicon path:'
    },
    enableFasterBuildV4: {
      type: 'confirm',
      message: 'Enable faster build v4?'
    },
    enableReadmeAsHome: {
      type: 'confirm',
      message: 'Enable README as home page?'
    }
  };

  const optionConfig = optionConfigs[optionName];
  if (!optionConfig) return currentValue;

  // Use inquirer for the actual prompt
  const question = {
    name: optionName,
    default: currentValue,
    ...optionConfig
  };

  const result = await inquirer.prompt([question]);
  return result[optionName];
}

async function main() {
  console.log('🚀 Create API Docs Configuration\n');
  
  // Read package.json for prefilling data
  const packageJson = await readPackageJson();
  
  // Pre-fill all options with sensible defaults
  let config = {
    name: packageJson?.name || 'API Documentation',
    domain: 'https://api.example.com',
    typedocId: 'functions',
    entryPoints: '../src/**/*',
    gitRepoDocsPath: 'https://github.com/your-username/your-repo/tree/master/',
    sourceLinkTemplate: 'https://github.com/your-username/your-repo/tree/master/{path}#L{line}',
    openAPISpecPath: false,
    openAPIDocsOutput: './src/api',
    openAPIShowSchemas: false,
    showEditsOnGitHub: true,
    googleAnalyticsId: false,
    compileForSubdomain: true,
    tsconfig: './tsconfig.json',
    readme: '../readme.md',
    sanitizeComments: false,
    logoURL: '/',
    baseFolder: './',
    logo: '/icon.png',
    favicon: '/icon.png',
    enableFasterBuildV4: false,
    enableReadmeAsHome: false
  };

  const optionLabels = {
    name: '📝 Name (Documentation title and browser tab)',
    domain: '🌐 Domain (Base URL for hosting docs)',
    typedocId: '📁 TypeDoc ID (Folder name for function docs)',
    entryPoints: '🔍 Entry Points (Glob pattern for TypeScript files)',
    gitRepoDocsPath: '📚 Git Repo Docs Path (GitHub URL for source links)',
    sourceLinkTemplate: '🔗 Source Link Template (GitHub links with {path} and {line})',
    openAPISpecPath: '📄 OpenAPI Spec Path (Path to OpenAPI/Swagger file)',
    openAPIDocsOutput: '📂 OpenAPI Docs Output (Directory for generated docs)',
    openAPIShowSchemas: '📊 Show OpenAPI Schemas (Display schema definitions)',
    showEditsOnGitHub: '✏️ Show Edit Links on GitHub (Add edit page links)',
    googleAnalyticsId: '📈 Google Analytics ID (Tracking ID for usage monitoring)',
    compileForSubdomain: '🌍 Compile for Subdomain (Optimize for subdomain hosting)',
    tsconfig: '⚙️ TSConfig Path (TypeScript config file path)',
    readme: '📖 README Path (README file for homepage)',
    sanitizeComments: '🧹 Sanitize Comments (Remove HTML from JSDoc)',
    logoURL: '🏠 Logo URL (URL when logo is clicked)',
    baseFolder: '📂 Base Folder (Root directory for docs)',
    logo: '🖼️ Logo Path (Logo image file path)',
    favicon: '🎯 Favicon Path (Favicon image file path)',
    enableFasterBuildV4: '⚡ Enable Faster Build V4 (Use Docusaurus v4 build)',
    enableReadmeAsHome: '🏠 Enable README as Home (Use README as homepage)'
  };

  const configKeys = Object.keys(config);

  // Create choices for the checkbox menu
  const choices = configKeys.map((key, index) => ({
    name: `${(index + 1).toString().padStart(2, ' ')}. ${optionLabels[key]}\n    Current: ${config[key]}`,
    value: key
  }));

  const { selectedOptions } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedOptions',
      message: 'Press SPACE to select options to edit, ENTER to finish:',
      choices: choices,
      pageSize: 15
    }
  ]);

  // Edit selected options
  for (const selectedOption of selectedOptions) {
    console.log(`\n🔧 Editing: ${optionLabels[selectedOption]}\n`);
    const newValue = await editOption(selectedOption, config[selectedOption], config);
    config[selectedOption] = newValue;
    console.log(`✅ Updated: ${optionLabels[selectedOption]} = ${newValue}\n`);
  }

  return config;
}

async function runMain() {
  try {
   

    /// download the grab-api repo
    Github.downloadRepo('https://github.com/vtempest/grab-api')

    /// move the api-docs-standard folder to ./docs-config
    // Move the api-docs-standard folder to ./docs-config
 
    
    // const sourcePath = './grab-api/docs-config';
    const sourcePath = './grab-api/create-api-docs/api-docs-standard';
    const targetPath = './docs-config';
    
    if (fs.existsSync(sourcePath)) {
      // Create target directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      
      // Copy all files from source to target
      const copyRecursive = (src, dest) => {
        const stats = fs.statSync(src);
        if (stats.isDirectory()) {
          if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
          }
          const files = fs.readdirSync(src);
          files.forEach(file => {
            copyRecursive(path.join(src, file), path.join(dest, file));
          });
        } else {
          fs.copyFileSync(src, dest);
        }
      };
      
      copyRecursive(sourcePath, targetPath);


      const config = await main();
    
      // Create customize-docs.js in current directory
      const created = await createCustomizeDocs(config);
      if (!created) {
        console.log('❌ Setup failed. Please check your inputs and try again.');
        process.exit(1);
      }
    } else {
      console.log('⚠️ Source folder not found, skipping move operation');
    }

    console.log('📁 Saved docs config in ./docs-config/config/customize-docs.js!');
    
  } catch (error) {
    console.error('❌ An error occurred:', error.message);
    process.exit(1);
  }
}

// Handle command line arguments
if (import.meta.url === `file://${process.argv[1]}`) {
  runMain().catch(console.error);
}

export { main };
