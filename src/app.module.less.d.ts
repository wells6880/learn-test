declare namespace AppModuleLessModule {
  export interface IAppModuleLess {
    btn: string;
    "font-red": string;
    fontRed: string;
    icon: string;
    table: string;
    test: string;
  }
}

declare const AppModuleLessModule: AppModuleLessModule.IAppModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppModuleLessModule.IAppModuleLess;
};

export = AppModuleLessModule;
