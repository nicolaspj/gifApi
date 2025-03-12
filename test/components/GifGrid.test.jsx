import { render , screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');
describe('Prueba a  GifGrid', () => { 
    
    const category = 'DBZ';

    test('Debe mostrar el loadinf inicialmente', ()  => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        
        render( <GifGrid category = { category }/> );
        screen.debug();
        expect( screen.getByText('...Cargando'));
        expect( screen.getByText( category ));

     })

     test('debe de mostrar items cuando se carga las imagenes de useFetchGifs', () => { 
        const gifs = [
            {
                id : 'abc',
                title : 'kjjj',
                url : 'https://andaasaber.no'
            },
            {id : 'abc1',
                title : 'jkjjj',
                url : 'https://andaasaber.no'}
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })


        render( < GifGrid category = { category }/> )
        screen.debug(); 
        expect(screen.getAllByRole('img').length).toBe(2)
      })
 })