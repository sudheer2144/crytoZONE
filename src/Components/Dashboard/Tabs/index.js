import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import "./style.css"
import GridComponent from '../Grid';
import axios from 'axios';
import ListComponent from '../List';
import SearchComponent from '../../SearchComponent';
import PageComponent from '../Pagination';
import LoaderComponent from '../../Loader';
import { motion } from 'framer-motion';

export default function LabTabs() {
    const [value, setValue] = useState('1');
    const [coins, setCoins] = useState();
    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleSearch(value) {
        setSearch(value);
    }

    const filteredList = coins && coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

    // console.log(filteredList);

    useEffect(() => {
        setIsLoading(true);
        async function getCoisData() {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&locale=en");
                setCoins(response.data);
                setPaginatedCoins(response.data.slice(0, 10));
                setIsLoading(false)
            } catch (error) {
                console.log(error.message);
                setIsLoading(false)
            }
        }
        getCoisData();
    }, []);

    function handlePageChange(event, value) {
        setPageNumber(value);
        const startIndex = (value - 1) * 10;
        setPaginatedCoins(coins.slice(startIndex, startIndex + 10));
        window.scrollTo(0, 0);
    }



    return (
        <>
            {
                isLoading ? <LoaderComponent /> :
                    <motion.div
                        id='tabs'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <SearchComponent value={search} handleFunction={handleSearch} />

                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} variant='fullWidth'>
                                        <Tab icon={<FormatListBulletedRoundedIcon />} value="1" />
                                        <Tab icon={<GridOnRoundedIcon />} value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <div className="list-values">
                                        {
                                            search ? filteredList && filteredList.map((coin, index) => {
                                                return <ListComponent coin={coin} key={index + 1} delay={(index % 10) * 0.1} />
                                            }) :
                                                paginatedCoins && paginatedCoins.map((coin, index) => {
                                                    return <ListComponent coin={coin} key={index + 1} delay={(index % 10) * 0.1} />
                                                })
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel value="2">
                                    <div className="grid-values">
                                        {
                                            search ? filteredList && filteredList.map((coin, index) => {
                                                return <GridComponent coin={coin} key={index + 1} delay={(index % 10) * 0.1} />
                                            }) :
                                                paginatedCoins && paginatedCoins.map((coin, index) => {
                                                    return <GridComponent coin={coin} key={index + 1} delay={(index % 10) * 0.1} />
                                                })
                                        }
                                    </div>
                                </TabPanel>
                            </TabContext>
                        </Box>
                        {!search && coins && <PageComponent pageNumber={pageNumber} handleChage={handlePageChange} />}
                        {!coins && !search && <h1 className='not-found'>Not Found..</h1>}
                        {search && !filteredList && <h1 className='not-found'>Not Found..</h1>}
                    </motion.div>
            }
        </>
    );
}