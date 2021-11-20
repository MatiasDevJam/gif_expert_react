import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en <useFetchGifs />', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Jamon'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    })

    test('debe retornar un array de imágenes y el loeading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Jamon'));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
})
