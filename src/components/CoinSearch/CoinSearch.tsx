import { FC, JSX, useState } from "react";
import styles from './CoinSearch.module.scss';
import search from '../../images/search.svg';

interface CoinSearhProps {
    setShowModal: Function;
    showModal: Boolean;
}

const CoinSearch: FC<CoinSearhProps> = ({showModal, setShowModal}):JSX.Element => {

    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setShowModal((showModal:any):Boolean => !showModal)
    }

    return (
        <div onClick={handleClick}  className={showModal 
            ? styles.search + ' ' + styles['search-active'] 
            : styles.search}>
            <img src={search} alt="Search Icon" className={styles['search__icon']} />
        </div>
    )
}

export default CoinSearch