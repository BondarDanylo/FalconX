import axios from "axios";
import { FC, JSX, useEffect, useState } from "react";
import styles from './CoinList.module.scss';

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    current_price: number,
    image: string,
    price_change_percentage_24h: number,
}

interface CoinListProps {
    inputValue: string;
}

const CoinList: FC<CoinListProps> = ({inputValue}):JSX.Element => {

    const [coinList, setCoinList] = useState<ICoin[]>([])

    useEffect(()=>{
        coinList.filter((item:any) => console.log(item['symbol']))
    }, [inputValue])

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        })
        .then(response => setCoinList(response.data))
    }, [])
    
    return (
        <ul className={styles.list}>
                {coinList.map((item: any)=> {
                    return(
                        <li key={item.id} className={styles['list__item']}>
                            <div className={styles.wrapper}>
                                <img src={item.image} alt="Coin Logo" className={styles['coin-icon']} />
                                <div>
                                    <h3 className={styles['coin-title']}>
                                        {item.symbol.toUpperCase()}/USDT
                                    </h3>
                                    <p className={styles['coin-name']}>
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.wrapper}>
                                <h3 className={styles['coin-price']}>
                                    ${item['current_price']}
                                </h3>
                                <p className={item['price_change_percentage_24h'] > 0 
                                ? (styles['coin-change'] + ' ' + styles['coin-profit']) 
                                : (styles['coin-change'] + ' ' + styles['coin-loss'])}>

                                    {item['price_change_percentage_24h']}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
    )
}

export default CoinList