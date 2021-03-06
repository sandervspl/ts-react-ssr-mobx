// global variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __ACC__: boolean;
declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;

// extend window object
interface Window {
  devToolsExtension: Function;
  stores: object;
}

// extend NodeJS modules
interface NodeModule {
  hot: {
    accept: (path: string, cb: Function) => any;
  };
}

// files
declare module '*.svg';
declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.json' {
  const value: any;
  export default value;
}
