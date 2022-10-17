import { FC } from 'react';
import { IButton } from 'types';
import styles from './style.module.scss';

export const Button: FC<IButton> = ({ children, icon, ...props }) => {
    return (
        <button className={styles.btn} {...props}>
            <div className={styles.icon}>
                <img src={icon} alt="button-icon" />
            </div>
            {children}
        </button>
    );
};
