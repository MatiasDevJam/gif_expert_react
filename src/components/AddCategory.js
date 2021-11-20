import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // esta función nos permite cambiar el estado del input
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    // función que permite quitar el comportamiento por defecto del form
    const handleSubmit = ( e ) => {
        e.preventDefault();

        //validamos que el usuario no envie datos vacios
        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input  
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

// a traves de props nos aseguramos que setCategories sea requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}