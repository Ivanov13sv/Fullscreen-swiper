import  { useState, FC, TouchEvent } from 'react';
import { ISwiper } from 'types';
import styles from './style.module.scss';


export const Swiper: FC<ISwiper> = ({ children, activeSlide,setActiveSlide }) => {

    const [touchPosition, setTouchPosition] = useState<number | null>(null);
    
    const nextSlide = () => {
        if (activeSlide < children.length - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide >= 0) {
            setActiveSlide(activeSlide - 1);
        }
    };


    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 8) {
            nextSlide();
        }

        if (diff < -8) {
            prevSlide();
        }
        setTouchPosition(null);
    };

    return (
        <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div
                className={styles.inner}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {children}

            </div>
        </div>
    );
};

interface ICarouselItem {
    children: JSX.Element;
}

export const CarouselItem: FC<ICarouselItem> = ({ children }) => {
    return <div >{children}</div>;
};
