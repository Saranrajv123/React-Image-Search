import React from 'react';
import './ImagesList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    console.log(props.images)

    const image = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image} />
        )
    })
    return <div className="image-list">{image}</div>
}

export default ImageList;