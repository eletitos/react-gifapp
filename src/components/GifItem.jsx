import React from 'react';

const GifItem = ({title, url}) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <div>{title}</div>
        </div>
    );
}

export default GifItem;
