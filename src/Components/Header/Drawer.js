import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';


export default function TemporaryDrawer() {
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

    const [open, setOpen] = useState(false);


    return (
        <div>
            <Button onClick={() => { setOpen(true) }}>
                <MenuRoundedIcon />
            </Button>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <div className="drawer-container">
                    <div className="drawer-close-btn">
                        <p
                            className="theme-toggle"
                            onClick={changeTheme}
                        >
                            {
                                !darkTheme ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />
                            }
                        </p>
                        <Button onClick={() => { setOpen(false) }} >
                            <CloseRoundedIcon />
                        </Button>
                    </div>
                    <div className="drawer-links">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/compare"}>Compare</NavLink>
                        {/* <NavLink to={"/favorites"}>Favorites</NavLink> */}
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}