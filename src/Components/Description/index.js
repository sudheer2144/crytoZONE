import React, { useState } from 'react';
import './style.css'

const DescriptionComponent = ({ title, desc }) => {

    const [short, setShort] = useState(true);

    const dotIndex = desc.indexOf(".");
    const shortDesc = desc.slice(0, dotIndex + 1);
    const longDesc = desc;

    function handleClick() {
        setShort(!short);
    }

    return (
        <div className='desc-container'>
            <h1 className="title">{title}</h1>
            <p
                className="desc"
                dangerouslySetInnerHTML={{ __html: short ? shortDesc : longDesc }}
            >
            </p>
            <span onClick={handleClick}>
                {
                    short ? "Read more..." : "Read less..."
                }
            </span>
        </div>
    );
}

export default DescriptionComponent;
