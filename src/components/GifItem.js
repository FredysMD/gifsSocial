import React from 'react';
import PropType from 'prop-types';

export const GifItem = ({ url, title }) => {

    return (
        <div className = "card-size">
             <div className = "card animate__slideInDown">
                <img className = "card-img-top" src = { url } alt = { title } />
                <div className = "card-body">
                    <h5 className = "card-title">{ title }</h5>
                </div>
            </div>
        </div>
    )
}

GifItem.prototype = {
    url: PropType.string.isRequired,
    title: PropType.string.isRequired
}