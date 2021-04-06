import React from 'react';
import { shallow } from "enzyme";

import GifGrid from '../../components/GifGrid';
import { useGifFetch } from '../../hooks/useGifFetch';

jest.mock('../../hooks/useGifFetch');

describe('Test to GifGrid component', () => {
    
    const category = 'Messi';


    test('should have GifGrid component', () => {
        

        useGifFetch.mockReturnValue( {
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category = { category } /> ); 
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show item when loading images ', () => {
       
        const gifs = [{
            id: 'Fredys',
            url:'https://fredys.com',
            title: 'Fredys CEO'
        }];

        useGifFetch.mockReturnValue( {
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category = { category } /> ); 

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe(false);
        expect( wrapper.find( 'GifItem' ).length ).toBe( gifs.length );

    });
    
});
