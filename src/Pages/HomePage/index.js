import React from 'react';
import "./style.css"
import CustomButton from '../../Components/Button';
import gradient from '../../Assets/gradient.png';
import phoneImage from "../../Assets/iphone.png";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    function dashboardClick() {
        navigate("/dashboard");
    }

    function shareClick() {

    }

    return (
        <div className='main-container'>

            <div className="left">
                <motion.h1
                    className='t1'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Track Crypto
                </motion.h1>

                <motion.h1
                    className='t2'
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Real Time
                </motion.h1>
                {/* <p>Some matter</p> */}
                <div className="btn-section">
                    <CustomButton text={"Dashboard"} onclick={dashboardClick} outlined={false} />
                    <CustomButton text={"Share"} onclick={shareClick} outlined={true} />
                </div>
            </div>
            <motion.div
                className="right"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <img src={gradient} alt="" className='phone-gradient' />
                <motion.img
                    src={phoneImage}
                    className='phone-image'
                    initial={{ y: -10 }}
                    animate={{ y: 20 }}
                    transition={{
                        duration: 1.5,
                        type: "smooth",
                        repeatType: "mirror",
                        repeat: Infinity
                    }}
                />
            </motion.div>
        </div>
    );
}

export default HomePage;
