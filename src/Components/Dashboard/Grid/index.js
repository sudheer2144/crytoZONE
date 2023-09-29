import React from 'react';
import "./style.css"
// import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
// import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const GridComponent = ({ coin, delay }) => {

    const navigate = useNavigate();

    const trending = coin.price_change_percentage_24h > 0 ? true : false;


    function goToDetails() {
        navigate(`/coin/${coin.id}`)
    }

    return (
        <motion.div
            className='grid-coin-card'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            onClick={goToDetails}
        >
            <div className="grid-logo-section">
                <img src={coin.image} className='grid-coin-image' alt='coin-logo' />
                <div className="grid-name-section">
                    <p className="grid-coin-symbol">
                        {coin.symbol}
                    </p>
                    <p className="grid-coin-name">
                        {coin.name}
                    </p>
                </div>
                {/* <div className="grid-fav-section">
                    <p className="grid-favorite">

                    </p>
                </div> */}
            </div>
            <div className="grid-percentage-section">
                <p className={`grid-percentage ${trending ? "grid-trending-up" : "grid-trending-down"}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p className={`grid-trending ${trending ? "grid-trending-up" : "grid-trending-down"}`}>
                    {
                        trending ? <ArrowDropUpRoundedIcon className='grid-icon-green' /> : <ArrowDropDownRoundedIcon className='grid-icon-red' />
                    }
                </p>
            </div>
            <div className="grid-price-section">
                <p className={`grid-price ${trending ? "green" : "red"}`}>
                    $ {coin.current_price.toFixed(2).toLocaleString()}
                </p>
                <p className="grid-total-volume">
                    Total Volume: {coin.total_volume.toLocaleString()}
                </p>
                <p className="grid-market-cap">
                    Market Cap: {coin.market_cap.toLocaleString()}
                </p>
            </div>
        </motion.div>
    );
}

export default GridComponent;
