import styles from './style.module.scss';
import logo from 'assets/img/logo.png';
export const Footer = () => {
    return (
        <footer className={styles.footer}>
                <img src={logo} alt='logo'/>
        </footer>
    );
};
