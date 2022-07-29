import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";



describe('Pruebas sobre componente <AddCategory/>', () => {

    // Establezco mi sujeto de pruebas 
    // render(<AddCategory onNewCategory={ () => {} } />);
    

    test('Debe de cambiar el valor de la caja de texto', () => {
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue}});
        // screen.debug();

        expect(input.value).toBe(inputValue);

    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
       

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: inputValue}});
        // screen.debug();
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toBeCalledTimes(1);
        expect(onNewCategory).toBeCalledWith(inputValue.trim());
    });

    test('No debe de llamar onNewCategory si el input está vacío', () => {
        const inputValue = '  ';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
       

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        expect(onNewCategory).not.toHaveBeenCalled();
    });
    
    
});


