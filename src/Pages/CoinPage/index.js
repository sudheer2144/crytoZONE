import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useParams } from 'react-router-dom';
import { coinObject } from './Functions/CoinDataObject';
import ListComponent from '../../Components/Dashboard/List';
import LoaderComponent from '../../Components/Loader';
import axios from 'axios';
import './style.css'
import DescriptionComponent from '../../Components/Description';
import LineChart from '../../Components/Chart';
import { ur } from '@faker-js/faker';
import SelectDaysComponent from '../../Components/Select';

const CoinPage = () => {

    const { coinID } = useParams();
    const [coinData, setCoinData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [days, setDays] = useState(7);
    const [chartsData, setChartsData] = useState();
    // const [marketcap,setMarketcap] = useState();

    // console.log(coinID);

    // console.log(coinData)

    useEffect(() => {
        setIsLoading(true);
        async function getCoinsData() {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`);
                // console.log(response.data);
                coinObject(setCoinData, response.data);
                // getCharts();
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }
        getCoinsData()
    }, [coinID]);

    useEffect(() => {
        setIsLoading(true);
        async function getCharts() {
            const coinURL = `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
            // console.log(coinURL);
            const response = await axios.get(coinURL);
            setChartsData(response.data);
            setIsLoading(false);
        }
        getCharts();
    }, [days])

    return (
        <>
            {
                isLoading && <LoaderComponent />
            }
            {
                !isLoading && coinData &&
                <div className='coin-info-main'>
                    <ListComponent coin={coinData} />
                    {chartsData &&
                        <div className='chart-section-main'>
                            <SelectDaysComponent defDays={days} setDataDays={setDays} />
                            <LineChart coinData={chartsData} />
                        </div>
                    }
                    <DescriptionComponent desc={coinData.desc} title={coinData.name} />
                </div>
            }
        </>
    );
}

export default CoinPage;
