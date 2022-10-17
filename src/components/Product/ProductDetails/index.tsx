import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import chevron from 'assets/img/icons/chevron.png';
import closeBtn from 'assets/img/icons/btn_close.png';
import { getPagesArr } from 'utils';
import { IProductDetails } from 'types';



const list = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit',
    },
    { id: 2, text: 'Faucibus pulvinar elementum integer enim' },
    { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur' },
    {
        id: 4,
        text: 'Faucibus pulvinar elementum integer enim',
    },
    { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur  ' },
    { id: 6, text: 'Faucibus pulvinar elementum integer enim ' },
];

export const ProductDetails: FC<IProductDetails> = ({ hideDetails }) => {
    const [activePage, setActivePage] = useState(1);

    const indicatorsList = getPagesArr(list.length, 3).map((_, i) => (
        <span
            key={i}
            className={`${styles['buttons__indicator']} ${
                activePage === i + 1
                    ? `${styles['buttons__indicator--active']}`
                    : `${styles['buttons__indicator']}`
            } `}
        />
    ));

    const indexOfLastPost = activePage * 3;
    const indexOfFirstPost = indexOfLastPost - 3;
    const currentitems = list.slice(indexOfFirstPost, indexOfLastPost);


    const setNextPage = () => {
        if (activePage < indicatorsList.length) {
            setActivePage((active) => active + 1);
        }
    };
    const setPrevPage = () => {
        if (activePage > 1) {
            setActivePage((active) => active - 1);
        }
    };

    const listItems = currentitems.map((item) => (
        <li className={styles.listItem} key={item.id}>
            <span className={styles.listItem__number}>
                {item.id < 10 ? `0${item.id}` : item.id}
            </span>
            {item.text}
        </li>
    ));

    return (
        <section className={styles.details}>
            <button className={styles.details__closeBtn} onClick={hideDetails}>
                <img src={closeBtn} alt="close-button" />
            </button>
            <div className={styles.details__body}>
                <p>ПРЕИМУЩЕСТВА</p>
 
                <ul className={styles.details__list}>{listItems}</ul>
                <div className={styles.buttons}>
                    <button
                        onClick={setPrevPage}
                        className={`${styles['buttons__btn']} ${styles['prevBtn']}`}
                    >
                        <img src={chevron} alt='chevron'/>
                    </button>

                 
                    {indicatorsList}
                    <button
                        onClick={setNextPage}
                        className={`${styles['buttons__btn']} ${styles['nextBtn']}`}
                    >
                        <img src={chevron}  alt='chevron'/>
                    </button>
                </div>
            </div>
        </section>
    );
};

