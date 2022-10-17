import styles from './style.module.scss'
import { FC } from 'react';
import { IModal } from 'types';

export const Modal: FC<IModal> = ({ children, isOpen = false }) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>{children}</div>
        </div>
    );
};