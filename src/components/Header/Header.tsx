import { FC, JSX, useState } from "react";
import Button from "../Button/Button";
import CoinSearch from "../CoinSearch/CoinSearch";
import Logo from '../Logo/Logo';
import Menu from "../Menu/Menu";
import Modal from "../Modal/Modal";
import styles from './Header.module.scss';

const Header: FC = ():JSX.Element => {
    
    const [showModal, setShowModal] = useState<Boolean>(false)

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navigation}>
                    <div className={styles['navigation__wrapper']}>
                        <Logo />
                        <Menu />
                    </div>
                    <div className={styles['navigation__wrapper']}>
                        <CoinSearch showModal={showModal}  setShowModal={setShowModal}/>
                        <Button>Login / Sign up</Button>
                    </div>
                </nav>
                <Modal showModal={showModal}/>
            </div>
        </header>
    )
}

export default Header