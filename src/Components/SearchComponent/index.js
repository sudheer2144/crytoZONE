import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./style.css"

const SearchComponent = ({ value, handleFunction }) => {

    function handleChange(e) {
        handleFunction(e.target.value);
    }
    return (
        <div className='search-main'>
            <div className='search-container'>
                <SearchRoundedIcon />
                <input
                    type="text"
                    className='search-input'
                    placeholder="Search..."
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
    );
}

export default SearchComponent;
