import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './style.css'

const SelectCoinComponent = ({ defCoin, setState, text, coinData }) => {

    const [coin, setCoin] = useState(defCoin);

    const handleSelectedCoinChange = (event) => {
        setCoin(event.target.value);
        setState(event.target.value);
    };

    return (
        <div className='select-section'>
            <p>{text}</p>
            <div className="selector-section">
                <Select
                    value={coin}
                    onChange={handleSelectedCoinChange}
                >
                    {
                        coinData.map((coin) => {
                            return <MenuItem value={coin.id}>{coin.name}</MenuItem>
                        })
                    }

                </Select>
            </div>
        </div>
    );
}

export default SelectCoinComponent;