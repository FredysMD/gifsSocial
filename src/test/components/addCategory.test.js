import React from 'react';
import { shallow } from 'enzyme';

import  AddCategory  from '../../components/AddCategory';


describe('Test to AddCategory component', () => {
    
    //const setCategories = () => {};
    const setCategories = jest.fn();
    
    let wrapper = shallow( <AddCategory setCategories = { setCategories } /> ); // for have the snippets

    beforeEach( () => {

        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories = { setCategories } /> );

    });
    
    test('should have addCategory component', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('should change field input ', () => {
        
        const input = wrapper.find('input');
        
        const value = 'Messi';

        input.simulate('change', { target: { value } });

        const p = wrapper.find('p').text().trim();

        expect( p ).toBe( value );
        
    });
    
    test('should not post the info in form', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // function empty; equal to () => {}

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('should call setCategory and clean InputValue tag', () => {
        
        const value = 'Mary';
        wrapper.find('input').simulate('change', { target : { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        const inputV = wrapper.find('input');

        expect( setCategories ).toHaveBeenCalled();
        expect( inputV.prop('value') ).toBe('');
        
    });
        
})
