import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Coinitem from '../components/Coinitem';
import Pagination from '../components/Pagination';

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sparkline=false"

const Homepage = () => {
    
    const [coindata, setCoinData ] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            await axios.get(baseURL)
            .then(res => {
                setloading(false);
                setCoinData(res.data);
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

    //Perform search
    const handleChange = e => {
        setsearch(e.target.value);
    };

    const filteredCoins = coindata.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    //Paginate
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCoins.slice(indexOfFirstItem, indexOfLastItem);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="container pt-5">
                <h3 className='pt-2 fs-4 d-flex justify-content-center'>Frontend Developer Coding Challenge</h3>
               
                {/* {console.log(coindata)}
                {console.log(coindata.length)}
                {console.log(coindata[0])} */}

                <form className='pt-3'>
                    <input 
                        className="form-control searchbar" 
                        type="text" 
                        placeholder="Search coin by name" 
                        aria-label="default input example"
                        onChange={handleChange} 
                    />
                </form>

                <div className='my-3'>
                   {currentItems.map(coin => {
                        return(
                            <Coinitem 
                                key={coin.id}
                                id={coin.id}
                                name={coin.name}
                                price={coin.current_price}
                                symbol={coin.symbol}
                                marketcap={coin.total_volume}
                                volume={coin.market_cap}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        )
                    })} 
                </div>

                <Pagination 
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredCoins.length}
                    paginate={paginate}
                    className='pt-3'
                />
            </div>
        </div>
    )
}

export default Homepage
