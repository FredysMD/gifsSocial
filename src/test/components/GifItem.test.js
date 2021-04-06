import React from 'react';
import { shallow } from 'enzyme';

import { GifItem } from '../../components/GifItem';


describe('Test to GifItem Component', () => {
    
    const props = { 
        url: 'https://urlTest.com', 
        title: 'Title test'
    };
    
    const wrapper = shallow( <GifItem title = { props.title } url = { props.url } /> );

    test('should have a component GifItem', () => {

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('should have a title equal to "Title test" ', () => {
        
        const h5 = wrapper.find('h5').text().trim();

        expect( h5 ).toBe( props.title );

    });
    
    test('should have a image with src equal to "https://urlTest.com" ', () => {
        
        const imgUrl = wrapper.find('img').prop('src');

        expect( imgUrl ).toBe( props.url );

    });

    test('should have a image with alt equal to "Title test"', () => {
        
        const imgAlt = wrapper.find('img').prop('alt');

        expect( imgAlt ).toBe( props.title );

    });
    
    test('should have a div with className animate__slideInDown', () => {
        
        const animate = wrapper.find('div').at(1).prop('className');

        expect( animate.includes('animate__slideInDown') ).toBe( true );

    });
    
});
