import React, { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify';
import {Link} from 'react-router-dom';
import { BsHash, BsCurrencyExchange } from 'react-icons/bs';
import { IoOpenOutline } from 'react-icons/io5'

const baseURL = "https://api.coingecko.com/api/v3/search/trending";

const Trendingpage = () => {

    const [trenddata, setTrendData ] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            await axios.get(baseURL)
            .then(res => {
                setloading(false);
                setTrendData(res.data.coins);
            }).catch( error => {
                setloading(false);
                console.error(error);
            });
        };

        fetchData();
    }, [])

    if (loading) {
        return (
            <div className="d-flex justify-content-center loadingsymbol">
                <div className="spinner-border blue" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> 
        );
    }

    return (
        <div>
            <div className='container pt-5'>
                <h1>Top 7 trending coins</h1>

                <div className="container pt-5">
                    <div className="row row-cols-2">

                    {trenddata.map(coin => {
                        return(
                        <div className="col" key={coin?.item?.id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={coin?.item?.large} className="img-fluid rounded-start trendimages" alt="..."/>
                                    </div>
                                    
                                    <div className="col-md-8">
                                        <div className="">
                                            <h5 className="card-title">{coin?.item?.name}</h5>
                                            <p className="card-text"> 
                                                <small className="text-muted">Symbol: {coin?.item?.symbol}</small>
                                            </p>
                                            <p className="card-text"> <BsHash size={30} className='intext-icons'/>
                                                Market rank: {coin?.item?.market_cap_rank}
                                            </p>
                                            <p className="card-text"> <BsCurrencyExchange size={30} className='intext-icons'/>
                                                Bitcoin exchange rate { millify(coin?.item?.price_btc , { precision: 6 } ) }
                                            </p>
                                            
                                            <Link className='coin-link' to={"/coindetails/"+ coin?.item?.name }>
                                                Learn more <IoOpenOutline />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trendingpage
