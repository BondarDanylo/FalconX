import { FC, JSX } from "react";
import styles from './Button.module.scss';

interface ButtonProps {
    children: string;
}

const Button: FC<ButtonProps> = ({children}): JSX.Element => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Button