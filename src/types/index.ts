import {ButtonHTMLAttributes} from 'react'
export interface IAbout {
    onScreen: boolean;
}

export interface IContainer extends React.HTMLAttributes<HTMLDivElement>{

}

export interface IHeader {
    goHome: () => void;
}

export interface IHome {
    goNextSlide: () => void;
}

export interface IProductDetails {
    hideDetails: () => void;
}

export interface IProduct {
    onScreen: boolean;
}


export interface ISwiper {
    activeSlide : number; 
    setActiveSlide: (slide: number) => void;
    children: JSX.Element[];
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
}

export interface IModal {
    children?: JSX.Element;
    isOpen: boolean;
}