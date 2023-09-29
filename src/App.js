import React from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/index'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './Pages/DashBoardPage';
import CoinPage from './Pages/CoinPage';
import ComparePage from './Pages/ComparePage';

const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#026402",
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/coin/:coinID' element={<CoinPage />} />
                    <Route path='/compare' element={<ComparePage />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
