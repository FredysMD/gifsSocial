import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = ( e ) =>{
        setInputValue( e.target.value );
    }
    
    const handleSubmit =  (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0 ){
            setCategories( categories => [ inputValue, ...categories]);
            setInputValue('');
        }
            
        
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInput }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;