import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';     

describe('Pruebas en <GifGridItem />', ()=> {

    const title = 'Un título';
    const url = 'https://localhost/unaimagen.jgp';

    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );

    test('Dede de mostrar el componente correctamente', ()=>{

        expect( wrapper ).toMatchSnapshot();
    })

    test('Dede de mostrar en el párrafo un title', ()=>{

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Dede tener la imagen igual a la url y alt de los props', ()=>{

        const img = wrapper.find('img');
        expect( img.prop('alt') ).toBe( title );
        expect( img.prop('src') ).toBe( url );
    })

    test('El div debe tener la clase animate__backInDown', ()=>{

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__backInDown') ).toBe( true );
        
    })

})