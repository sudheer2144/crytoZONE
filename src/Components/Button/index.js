import React from 'react';
import "./style.css"

const CustomButton = ({ text, onclick, outlined }) => {

    function handleClick() {
        onclick();
    }

    return (
        <div className={` btn ${outlined ? "custom-btn-outlined" : "custom-btn"}`} onClick={handleClick}>
            {text}
        </div>
    );
}

export default CustomButton;
