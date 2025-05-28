import { GrabFunction, LogFunction } from './index.d.ts';
declare global {
  // Browser globals
  interface Window {
    grab: GrabFunction;
    log: LogFunction;
  }
  
  // Node.js globals
  namespace NodeJS {
    interface Global {
      grab: GrabFunction;
      log: LogFunction;
    }
  }
  
  // Global variables available after script inclusion
  var grab: GrabFunction;
  var log: LogFunction;
}

// This export is needed to make this a module
export {};