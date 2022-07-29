import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componente GifGrid', () => {

    const category = 'categoría';

    test('debe de mostrar el loading inicialmente y la categoría', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        screen.debug();

        expect(screen.findByText('Cargando'));
        expect(screen.findByText(category));
    });

    test('Debe mostrar items cuando se cargan las imágenes con el fetch', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'goku',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    
    });

})