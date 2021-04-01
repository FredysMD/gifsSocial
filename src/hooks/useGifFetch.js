import { useEffect, useState } from 'react';
import  { getGifs } from '../helpers/getGif';


export const useGifFetch = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then( imgs => {
            setstate({
                data: imgs,
                loading: false
            })  
        })
    }, [category]);

    return state;
}