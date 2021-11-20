import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en el <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    })
    
    test('Debe de mostrar el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('no debe postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    test('debe llamar al setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo'
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    

})
