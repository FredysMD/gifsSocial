import { shallow } from 'enzyme';
import React from 'react';

import  GifApp  from '../GifApp';


describe('Test to GifApp component', () => {
    
    test('should create snapShot', () => {
       
        const wrapper = shallow( <GifApp /> );

        expect( wrapper ).toMatchSnapshot();

    });
    

});

