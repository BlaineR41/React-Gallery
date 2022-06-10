import React from 'react';

const Photo = ({image}) => {
    const url = `https://live.staticflickr.com/${image.server}/${image.farm}/${image.id}_${image.secret}.jpg`;

    return(
        <li>
            <img src={url} alt=""/>
        </li>
    );
}

export default Photo;