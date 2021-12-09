import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { BsHash,BsReddit } from 'react-icons/bs';
import { GiRank3,GiWorld } from 'react-icons/gi';

const coinURL = "https://api.coingecko.com/api/v3/coins/"

const Coindetails = () => {

    const { name } = useParams();
    const [coinDetails, setcoinDetails] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            await axios.get(coinURL + name , {
                params: {
                    localization: false,
                }
            } )
            .then(res => {
                setloading(false);
                console.log(res.data)
                setcoinDetails(res.data);
            }).catch( error => {
                setloading(false);
                console.error(error);
            });
        };

        fetchData();
    }, [name])

    if (loading) {
        return (
            <div class="d-flex justify-content-center loadingsymbol">
                <div className="spinner-border blue" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> 
        );
    }

    return (
        <div>

        
            <div className="container pt-5">
                <div className=''>
                    <img src={coinDetails?.image?.small} alt='' />
                    <h3 className='pt-2 fs-4'>{ coinDetails.name }</h3>
                    <p>Symbol: {coinDetails.symbol}</p>
                </div>
            
            <Link className='textlink' to="/"><IoArrowBack/> Go home</Link>
            
            {/* <p>Coin details here...</p>
            {console.log(coinDetails)}
            {coinURL + name }

            <p>Fetched data: {coinDetails.name}</p> */}

            
            <div className="row pt-3">
                <div className="col-6">
                    <p><GiWorld size={30} className='intext-icons'/>
                        <b>Website:</b>  { (coinDetails?.links?.homepage ) ? 
                        ( <a className='textlink' href={coinDetails?.links?.homepage}> 
                        {coinDetails?.links?.homepage} </a>) : "null"  }
                    </p>
                    <hr/> 
                    <p><IoLogoFacebook size={30} className='intext-icons'/> 
                        <b>Facebook Community:</b> { (coinDetails?.community_data?.facebook_likes) ? (coinDetails?.community_data?.facebook_likes) : "null"  }</p>
                    <hr/> 
                    <p><IoLogoTwitter size={30} className='intext-icons'/> <b>Twitter Follower:</b> { (coinDetails?.community_data?.twitter_followers) ? (coinDetails?.community_data?.twitter_followers) : "null"  }</p>
                    <hr/> 
                    <p><BsReddit size={30} className='intext-icons'/> <b>Reddit Subscribers:</b> { (coinDetails?.community_data?.reddit_subscribers) ? (coinDetails?.community_data?.reddit_subscribers) : "null"  }</p>
                </div>
                <div className="col-6">
                    <p><GiRank3 size={30} className='intext-icons'/><b>Market Cap Rank:</b>  { (coinDetails?.market_cap_rank ) ? 
                    ( coinDetails?.market_cap_rank ) : "null"  }</p>
                    <hr/> 
                    <p><BsHash size={30} className='intext-icons'/><b>Coingecko Rank:</b>  { (coinDetails?.coingecko_rank ) ? 
                    ( coinDetails?.coingecko_rank ) : "null"  }</p>
                    <hr/> 
                    <p><GoArrowUp size={30} className='intext-icons green'/><b>Up votes:</b>  { (coinDetails?.sentiment_votes_up_percentage ) ? 
                    ( coinDetails?.sentiment_votes_up_percentage + "%") : "null"  }</p>
                    <hr/> 
                    <p><GoArrowDown size={30} className='intext-icons red'/><b>Down votes:</b>  { (coinDetails?.sentiment_votes_down_percentage ) ? 
                    ( coinDetails?.sentiment_votes_down_percentage + "%") : "null"  }</p>
                </div>
            </div>

            <hr/>       
            
            <p className='pt-3'>Description: </p>
            <p className='text-justify'> { (coinDetails?.description?.en ) ? 
            ( coinDetails?.description?.en ) : "No description found."  }</p>
            <hr/>

            

            {/* <p className='pt-3'>Description: { coinDetails?.description?.en  }</p> */}
            {/* <p>Category: {coinDetails.categories}</p>

            <p>Facebook Community: { (coinDetails?.community_data?.facebook_likes) ? (coinDetails?.community_data?.facebook_likes) : "null"  }</p>
            <p>Twitter Follower: { (coinDetails?.community_data?.twitter_followers) ? (coinDetails?.community_data?.twitter_followers) : "null"  }</p>
            <p>Reddit Subscribers: { (coinDetails?.community_data?.reddit_subscribers) ? (coinDetails?.community_data?.reddit_subscribers) : "null"  }</p>

            <p>Website: { (coinDetails?.links?.homepage ) ? ( <a href={coinDetails?.links?.homepage}> {coinDetails?.links?.homepage} </a>) : "null"  }</p>

            <p>Down votes: { (coinDetails?.sentiment_votes_down_percentage ) ? 
            ( coinDetails?.sentiment_votes_down_percentage + "%") : "null"  }</p>
            <p>Up votes: { (coinDetails?.sentiment_votes_up_percentage ) ? 
            ( coinDetails?.sentiment_votes_up_percentage + "%") : "null"  }</p>
            
            <p>Coingecko Rank: { (coinDetails?.coingecko_rank ) ? 
            ( coinDetails?.coingecko_rank ) : "null"  }</p>

            <p>Market Cap Rank: { (coinDetails?.market_cap_rank ) ? 
            ( coinDetails?.market_cap_rank ) : "null"  }</p> */}

            </div>
        </div>
    )
}

export default Coindetails
