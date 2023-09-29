import React, { useEffect, useState } from 'react';
import SelectCoinComponent from './SelectList';
import axios from 'axios';
import './style.css'
import SelectDaysComponent from '../../Components/Select';
import { coinObject } from '../CoinPage/Functions/CoinDataObject';
import SelectedCoinsLineChart from './ChartCompare';
import DescriptionComponent from '../../Components/Description';
import LoaderComponent from '../../Components/Loader';
import { motion } from 'framer-motion'

const ComparePage = () => {
    const [coin1, setCoin1] = useState("bitcoin")
    const [coin2, setCoin2] = useState("ethereum")
    const [coin100, setCoin100] = useState()
    const [days, setDays] = useState(7);
    const [coin1Data, setCoin1Data] = useState();
    const [coin2Data, setCoin2Data] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [coin1Desc, setCoin1Desc] = useState();
    const [coin2Desc, setCoin2Desc] = useState();

    useEffect(() => {
        setIsLoading(true);
        async function getCoinsData() {
            try {
                const coinURL = `https://api.coingecko.com/api/v3/coins/${coin1}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
                // console.log(coinURL);
                const response = await axios.get(coinURL);
                setCoin1Data(response.data);
                // getCharts();
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }
        getCoinsData()
    }, [coin1]);

    useEffect(() => {
        setIsLoading(true);
        async function getCoinsData() {
            try {
                const coinURL = `https://api.coingecko.com/api/v3/coins/${coin2}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
                // console.log(coinURL);
                const response = await axios.get(coinURL);
                setCoin2Data(response.data);
                // getCharts();
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }
        getCoinsData()
    }, [coin2]);

    useEffect(() => {
        setIsLoading(false)

        async function getCoinData() {
            try {
                const responseDesc = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin1}`);
                // console.log(response.data);
                coinObject(setCoin1Desc, responseDesc.data)
                setIsLoading(false)

            } catch (error) {
                console.log(error.message);
                setIsLoading(false)

            }
        }
        getCoinData();
    }, [coin1Data])

    useEffect(() => {
        setIsLoading(false)

        async function getCoinData() {
            try {
                const responseDesc = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin2}`);
                // console.log(response.data);
                coinObject(setCoin2Desc, responseDesc.data)
                setIsLoading(false)

            } catch (error) {
                console.log(error.message);
                setIsLoading(false)

            }
        }
        getCoinData();
    }, [coin2Data])


    useEffect(() => {
        setIsLoading(true);
        async function getCharts() {
            try {
                const coin1URL = `https://api.coingecko.com/api/v3/coins/${coin1}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
                const coin2URL = `https://api.coingecko.com/api/v3/coins/${coin2}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
                // console.log(coinURL);
                const response1 = await axios.get(coin1URL);
                const response2 = await axios.get(coin2URL);
                setCoin1Data(response1.data)
                setCoin2Data(response2.data)
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                setIsLoading(false)
            }
        }
        getCharts();
    }, [days])

    useEffect(() => {
        setIsLoading(true)
        async function getCoisData() {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&locale=en");
                setCoin100(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error.message);
                setIsLoading(false)
            }
        }
        getCoisData();
    }, []);

    return (
        <>
            {isLoading && <LoaderComponent />}
            {!isLoading && <motion.div
                className='main-compare-section'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div className="select-coin-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}>
                    {
                        coin100 ? <>
                            <SelectCoinComponent defCoin={coin1} text={"Coin1"} setState={setCoin1} coinData={coin100} key={1} />
                            <SelectCoinComponent defCoin={coin2} text={"Coin2"} setState={setCoin2} coinData={coin100} key={2} />
                            <SelectDaysComponent defDays={days} setDataDays={setDays} />
                        </> : <h1>Please try agian later...</h1>
                    }
                </motion.div>
                <motion.div
                    className='select-coins-chart'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {
                        coin1Data && coin2Data && <>
                            <SelectedCoinsLineChart coin1Data={coin1Data} coin2Data={coin2Data} coin1={coin1} coin2={coin2} />
                        </>
                    }
                </motion.div>
                {
                    coin1Desc && coin2Desc &&
                    <motion.div className="desc-compare-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <DescriptionComponent desc={coin1Desc.desc} title={coin1Desc.name} />
                        <DescriptionComponent desc={coin2Desc.desc} title={coin2Desc.name} />
                    </motion.div>
                }

            </motion.div>}
        </>
    );
}

export default ComparePage;
