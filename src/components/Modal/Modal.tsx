import { FC, JSX, useState } from "react";
import styles from './Modal.module.scss';
import Input from "../Input/Input";
import CoinList from "../CoinList/CoinList";

interface ModalProps {
    showModal: Boolean;
}

const Modal: FC<ModalProps> = ({showModal}):JSX.Element => {

    const [inputValue, setInputValue] = useState<string>('')


    return (
        <div className={showModal 
            ? styles.modal + ' ' + styles['modal-show']
            : styles.modal
        }>
            <Input  inputValue={inputValue} setInputValue={setInputValue}/>
            <CoinList inputValue={inputValue}/>
        </div>
    )
}

export default Modal