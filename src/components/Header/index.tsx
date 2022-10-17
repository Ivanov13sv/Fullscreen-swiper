import { FC } from 'react';
import styles from './style.module.scss';
import logo from 'assets/img/icons/house.png';
import { IHeader } from 'types';


export const Header: FC<IHeader> = ({ goHome }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <span className={styles.home} onClick={goHome}>
                    <img src={logo} alt="home" />
                </span>
                <span className={styles.divider} />
                <span className={styles.navTitle}>PROJECT</span>
            </nav>
        </header>
    );
};
