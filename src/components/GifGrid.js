import React from 'react';
import Prototype from 'prop-types';

import { useGifFetch } from '../hooks/useGifFetch';

import { GifItem } from './GifItem';


const GifGrid = ( { category }) => {

    const { data:images, loading } = useGifFetch( category );

    return (
        <>
          <h2>{ category }</h2>
          { loading && <p className = "animate__animated animate__fadeIn">Loading...</p> }
          <ol>
            {
                images.map( img => (
                    <GifItem 
                        key = {img.id}
                        { ...img }
                    />
                ))
            }
          </ol>

        </>
    )
}

GifGrid.prototype = {
    category: Prototype.string.isRequired
}

export default GifGrid;

