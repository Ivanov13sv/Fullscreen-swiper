import  { useState,useEffect, FC } from 'react';
import bottle from 'assets/img/product/bottle.png';
import styles from './style.module.scss';
import { Button } from 'components/UI/Button';
import calendar from 'assets/img/icons/calendar.png';
import dishes from 'assets/img/icons/dishes.png';
import { Modal } from 'components/UI/Modal';
import { ProductDetails } from './ProductDetails';
import plus from 'assets/img/icons/plus.png'
import { IProduct } from 'types';



export const Product:FC<IProduct> = ({onScreen}) => {
    const [isOpenModal, setOpenModal] = useState(false);

    const toggleModal = () => setOpenModal(!isOpenModal);

    useEffect(() =>{
        if (!onScreen){
            setOpenModal(false)
        }
    },[onScreen])

    return (
        <section className={styles.product}>
            {(isOpenModal && onScreen) && (
                <Modal isOpen={isOpenModal}>
                    <ProductDetails hideDetails={toggleModal} />
                </Modal>
            )}
            <div className={styles.product__mainBlock}>
                <p>КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
                <h2>
                    BREND<span>XY</span>
                </h2>
                <div className={styles.grid}>
                    <div className={styles.grid1}>
                        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                        vestibulum lorem sed risus ultricies
                        <img src={dishes} alt="dishes" />
                    </div>
                    <div className={styles.grid2}>
                        A arcu <br /> cursus vitae
                        <img src={calendar} alt="calendar" />
                    </div>
                    <Button onClick={toggleModal} icon={plus}>
                        Подробнее
                    </Button>
                </div>
            </div>

            <img
                src={bottle}
                className={`${styles['product__bg-img']} ${styles['bottle']}`}
                alt="bottle"
            />
            <BackgroundBubbles />
        </section>
    );
};

const BackgroundBubbles = () => {
    return (
        <>
            <div
                className={`${styles['product__bg-img']} ${styles['blue-bubble1']}`}
            />

            <div
                className={`${styles['product__bg-img']} ${styles['blue-bubble2']}`}
            />

            <div
                className={`${styles['product__bg-img']} ${styles['blue-bubble3']}`}
            />
            <div
                className={`${styles['product__bg-img']} ${styles['blue-bubble4']}`}
            />
            <div
                className={`${styles['product__bg-img']} ${styles['blue-bubble5']}`}
            />

            <div
                className={`${styles['product__bg-img']} ${styles['pink-bubble']}`}
            />
            <div
                className={`${styles['product__bg-img']} ${styles['pink-bubble2']}`}
            />
            <div
                className={`${styles['product__bg-img']} ${styles['red-bubble']}`}
            />
        </>
    );
};
