import React, { ChangeEventHandler, EventHandler, FC, JSX } from "react";
import search from '../../images/search.svg';
import styles from './Input.module.scss';

interface InputProps {
    inputValue: string;
    setInputValue: Function;
}


const Input: FC<InputProps> = ({inputValue, setInputValue}):JSX.Element => {


    const changeHangler: ChangeEventHandler<HTMLInputElement> = (e):void => {
        setInputValue((prev:string) => e.target.value)
    }
    return (
        <div className={styles.wrapper}>
            <input onChange={changeHangler} value={inputValue} type="text" className={styles.input} placeholder="Search"/>
            <img src={search} alt="Search Icon" className={styles.search} />
        </div>
    )
}

export default Input