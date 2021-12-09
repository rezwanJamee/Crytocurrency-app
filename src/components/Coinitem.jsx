import React from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { IoOpenOutline } from 'react-icons/io5';

const Coinitem = ({
    id,
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='coinimage' />
                    <h1 >{name}</h1>
                    <p className='coin-symbol'>{symbol}</p> 
                </div>
                <div className='coin-data'>
                    <p className='coin-price'><b>${price}</b></p>
                    <p className='coin-percent'>{priceChange}</p>
                    
                    <p>${ millify(volume)}</p>
                    <p>Mkt Cap: <b>{ millify(marketcap)}</b></p>
                    
                    <Link className='coin-link' to={"/coindetails/"+ id}>Learn more <IoOpenOutline /></Link>
                </div>
            </div>
        </div>
    )
}

export default Coinitem
