import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css"

export default function PageComponent({ pageNumber, handleChage }) {



    return (
        <div className='page-container'>
            <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                page={pageNumber}
                onChange={handleChage}
            />
        </div>
    );
}