declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare namespace NodeJS {
    interface ProcessEnv {
        API_URL: string;
        API_KEY: string;
    }
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg";