import React from 'react'
import { shallow } from 'enzyme'
import GifExpertApp from "../GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
  
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una list de categorias', () => {
        
        const categories = ['Jamon', 'Queso'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    })
    
    
})
