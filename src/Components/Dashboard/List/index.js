import React from 'react';
import "./style.css"
// import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
// import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ListComponent = ({ coin, delay }) => {

    // console.log(coin);

    const navigate = useNavigate();

    const trending = coin.price_change_percentage_24h > 0 ? true : false;

    function goToDetails() {
        navigate(`/coin/${coin.id}`)
    }

    return (
        <motion.div
            className='list-coin-card'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            onClick={goToDetails}
        >
            <div className="list-logo-section">
                <img src={coin.image} className='list-coin-image' alt='coin-logo' />
                <div className="list-name-section">
                    <p className="list-coin-symbol">
                        {coin.symbol}
                    </p>
                    <p className="list-coin-name">
                        {coin.name}
                    </p>
                </div>
            </div>
            <div className="list-percentage-section">
                <p className={`list-percentage ${trending ? "list-trending-up" : "list-trending-down"}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p className={`list-trending ${trending ? "list-trending-up" : "list-trending-down"}`}>
                    {
                        trending ? <ArrowDropUpRoundedIcon className='list-icon-green' /> : <ArrowDropDownRoundedIcon className='list-icon-red' />
                    }
                </p>
            </div>
            <div className="list-price-section">
                <p className={`list-price ${trending ? "green" : "red"}`}>
                    ${coin.current_price.toFixed(2).toLocaleString()}
                </p>
                <p className="list-total-volume">
                    {coin.total_volume.toLocaleString()}
                </p>
                <p className="list-market-cap">
                    {coin.market_cap.toLocaleString()}
                </p>
            </div>
            {/* <div className="list-fav-section">
                <p className="list-favorite">

                </p>
            </div> */}
        </motion.div>
    );
}

export default ListComponent;
