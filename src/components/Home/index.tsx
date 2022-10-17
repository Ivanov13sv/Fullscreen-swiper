import { FC } from 'react';
import { Container } from 'components/Container/Container';
import { Button } from 'components/UI/Button';
import styles from './style.module.scss';
import arrow from 'assets/img/icons/arrow.png';
import pinkSperm from 'assets/img/home/pink_sperm.png';
import blurredPinkSperm from 'assets/img/home/blurred_pink_sperm.png';
import rodBacterum from 'assets/img/home/rod_bacterium.png';
import blurredBacterium from 'assets/img/home/blurred_bacterium.png';
import blurredBacterium2 from 'assets/img/home/blurred_bacterium2.png';
import bigBacterium from 'assets/img/home/big_bacterium.png';
import smoothBacterium from 'assets/img/home/smooth_bacterium.png';
import smoothBacterium2 from 'assets/img/home/smooth_bacterium2.png';
import pricklyBacterium from 'assets/img/home/prickly_bacterium.png';
import { IHome } from 'types';


export const Home: FC<IHome> = ({ goNextSlide }) => {
    return (
        <section className={styles.home}>
            <Container>
                <span className={styles['home__hello']}>ПРИВЕТ,</span>
                <p className={styles['home__main-message']}>
                    ЭТО <span>НЕ</span> КОММЕРЧЕСКОЕ
                </p>
                <div className={styles['home__next-slide-btn']}>
                    <p className={styles['home__main-message']}>ЗАДАНИЕ</p>
                    <Button onClick={goNextSlide} icon={arrow}>
                        Что дальше?
                    </Button>
                </div>
            </Container>
            <BackgroundBacterium />
        </section>
    );
};

const BackgroundBacterium = () => {
    return (
        <>
            <img
                className={`${styles['home__bg-img']} ${styles['pink_sperm']}`}
                src={pinkSperm}
                alt="pink_sperm"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['blurred_pink_sperm']}`}
                src={blurredPinkSperm}
                alt="pink_sperm"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['rod_bacterium']}`}
                src={rodBacterum}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['blurred_bacterium']}`}
                src={blurredBacterium}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['big_bacterium']}`}
                src={bigBacterium}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['smooth_bacterium']}`}
                src={smoothBacterium}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['blurred_bacterium2']}`}
                src={blurredBacterium2}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['smooth_bacterium2']}`}
                src={smoothBacterium2}
                alt="bacterium"
            />
            <img
                className={`${styles['home__bg-img']} ${styles['prickly_bacterium']}`}
                src={pricklyBacterium}
                alt="bacterium"
            />
        </>
    );
};
