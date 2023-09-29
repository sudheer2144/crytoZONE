import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './style.css'

const SelectDaysComponent = ({ defDays, setDataDays }) => {
    const [days, setDays] = useState(defDays);

    const handleDaysChange = (event) => {
        setDays(event.target.value);
        setDataDays(event.target.value);
    };

    return (
        <div className='select-section'>
            {/* <p>Select days:</p> */}
            <div className="selector-section">
                <Select
                    value={days}
                    onChange={handleDaysChange}
                >
                    <MenuItem value={7}>07 days</MenuItem>
                    <MenuItem value={14}>14 days</MenuItem>
                    <MenuItem value={30}>30 days</MenuItem>
                    <MenuItem value={60}>60 days</MenuItem>
                    <MenuItem value={120}>120 days</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default SelectDaysComponent;