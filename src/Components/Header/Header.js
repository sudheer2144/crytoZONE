import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./HeaderStyle.css"
import TemporaryDrawer from './Drawer';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { motion } from 'framer-motion';


const Header = () => {
    const navigate = useNavigate();
    const [darkTheme, setDarkTheme] = useState(true);

    function changeTheme() {
        setDarkTheme(!darkTheme);
    }

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkTheme])

    function handleClick() {
        navigate("/")
    }
    return (
        <div className='navbar'>
            <h1 className='logo' onClick={handleClick}>Crypto<span>ZONE</span></h1>
            <div className="links">
                <p
                    className="theme-toggle"
                    onClick={changeTheme}
                >
                    {
                        !darkTheme ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />
                    }
                </p>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/compare"}>Compare</NavLink>
                {/* <NavLink to={"/favorites"}>Favorites</NavLink> */}
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    );
}

export default Header;
