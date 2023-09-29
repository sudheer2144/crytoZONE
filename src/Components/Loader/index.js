import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css"

const LoaderComponent = () => {
    return (
        <div className='loader-section'>
            <CircularProgress />
        </div>
    );
}

export default LoaderComponent;
