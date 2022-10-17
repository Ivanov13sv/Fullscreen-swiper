import React, { FC } from 'react';
import { IContainer } from 'types';
import styles from './style.module.scss'

export const Container: FC<IContainer> = ({
    children,
}) => {
    return <div className={styles.container} >{children}</div>;
};
