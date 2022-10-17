/// <reference types="react-scripts" />
declare module '*.module.css';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png' {
    const value: string;
    export default value;
}
