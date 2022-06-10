import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

console.log(props);
    return(
        <div className='photo-container'>
            {/* <h2>{props.query}</h2> */}
                <ul>
                {props.photos.map(photo => <Photo image={photo} key={photo.id} /> )}
                </ul>
        </div>
    );
}

export default PhotoContainer;