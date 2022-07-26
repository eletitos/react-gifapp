import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas sobre el componente GifItem', () => {
    const title = 'Titulo de prueba';
    const url = 'https://media.giphy.com/media/hsCpEuXImDcQJ8EsrL/giphy.gif'
        

    
    test('Debe hacer match con el snapshot', () => {

        const {container} = render ( <GifItem title= {title} url={url}/> )

        expect(container).toMatchSnapshot();
    });


    test('debe mostrar imagen con el url y alt indicado', () => {

        render ( <GifItem title= {title} url={url}/> );
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    

    test('Debe de mostrar el título en el componente', () => {
        render ( <GifItem title= {title} url={url}/> );
        expect(screen.getByText(title)).toBeTruthy();
    });

});
