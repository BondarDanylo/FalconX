import { FC, JSX } from "react";
import styles from './Menu.module.scss';

const Menu: FC = ():JSX.Element => {
    const menuList: Array<string> = ['Markets', 'Spot', 'Support', 'Blog']

    return (
        <ul className={styles.menu}>
            {menuList.map((link: string, index: number) => {
                return (
                    <li key={index} className={styles['menu__item']}>
                        <a href="#" className={styles['menu__link']}>
                            {link}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu