import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('pruebas sobre el componente <GiffExpertApp />', () => {
    
    test('Debe añadirse una nueva categoría', () => {
        render(<GifExpertApp/>)
        // screen.debug();
        const inputValue = 'Nuevo';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const categoriasIniciales = screen.getAllByRole('heading', {level: 3});
        // console.log(categoriasIniciales);


        // Eventos
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form);

        const categoriasFinales = screen.getAllByRole('heading', {level: 3});
        
        expect(categoriasFinales.length).toBe(categoriasIniciales.length +1);
        expect(screen.findByText(inputValue)).toBeTruthy;
        
    });

    test('Debe no añadir una categoría repetida', () => {
        render(<GifExpertApp/>)
        // screen.debug();
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const categoriasIniciales = screen.getAllByRole('heading', {level: 3});

        // Eventos
        fireEvent.input(input, {target: {value: categoriasIniciales[0].innerText}})
        fireEvent.submit(form);

        const categoriasFinales = screen.getAllByRole('heading', {level: 3});

        
        expect(categoriasFinales.length).toBe(categoriasIniciales.length);
        
    });

});
