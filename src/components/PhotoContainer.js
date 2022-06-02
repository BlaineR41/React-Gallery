import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    const results = props.data;

    return(
        <div className='photo-container'>
            <h2>{props.query}</h2>
                <ul>
                {results.map(photo => (
                 <Photo id={photo.id} server={photo.server} secret={photo.secret} key={photo.id}/>
                ))}
                </ul>
        </div>
    );
}

export default PhotoContainer;