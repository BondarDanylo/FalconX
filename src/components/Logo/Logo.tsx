import { FC, JSX } from "react";
import logo from '../../images/logo.png';
import styles from './Logo.module.scss';

const Logo: FC = ():JSX.Element => {
    return (
        <a href="#" className={styles.logo}>
            <img src={logo} alt="Logo" className={styles['logo__icon']} />
            <p className={styles['logo__name']}>
                FalconX
            </p>
        </a>
    )
}

export default Logo