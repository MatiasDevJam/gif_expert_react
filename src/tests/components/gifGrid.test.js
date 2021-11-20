import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid>', () => {
    
    const category = 'japon';

    test('debe llamar al componente correctamente', () => {

        useFetchGifs.mockReturnValue()({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar imágenes cuando se carga useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiera.jpg',
            title: 'No lo sé'
        }]

        useFetchGifs.mockReturnValue()({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
})
