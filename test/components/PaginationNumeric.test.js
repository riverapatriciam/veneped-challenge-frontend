import {render, fireEvent, screen} from '@testing-library/react';
import PaginationNumeric from '../../src/components/PaginationNumeric';

jest.mock('react-i18next', () => {
    return {
        useTranslation: () => ({ t: (value) => value})
    }
});


beforeEach( () => {
    jest.clearAllMocks(); 
    
});

describe('Pruebas en el componente de Paginacion', () => { 
    
    
    test('Al hacer click en el numero debe cambiar a la pagina del numero indicado', () => { 
        
        const funcionPrueba = jest.fn();
        render(<PaginationNumeric filter={{}} setFilter={funcionPrueba} totalCount={40} currentPage={2} />)
        
        fireEvent.click(screen.queryByTestId(`pagination-number-3`));
        expect(funcionPrueba).toHaveBeenCalledWith({"page": 3})

     });

    test('Al hacer click al boton siguiente deberia mostrar la pagina siguiente a la actual', () => { 
        const funcionPrueba = jest.fn();
        render(<PaginationNumeric filter={{}} setFilter={funcionPrueba} totalCount={40} currentPage={1} />)
        
        fireEvent.click(screen.getByTestId('nextButtonTest'));
        expect(funcionPrueba).toHaveBeenCalledWith({"page": 2})
    });

    test('El boton para regresar a la pagina anteriror debe estar desabilitado cuando esta en la pagina 1', () => { 
        const funcionPrueba = jest.fn();
        render(<PaginationNumeric filter={{}} setFilter={funcionPrueba} totalCount={40} currentPage={1} />)

        fireEvent.click(screen.queryByTestId('previusButtonTest'));

        expect(funcionPrueba).not.toHaveBeenCalled();


     })
   
    test('Al hacer click al boton anterior deberia mostrar la pagina anteriror a la actual', () => { 
        
        const funcionPrueba = jest.fn();
        render(<PaginationNumeric filter={{}} setFilter={funcionPrueba} totalCount={40} currentPage={2} />)
        
        fireEvent.click(screen.getByTestId('previusButtonTest'));

        expect(funcionPrueba).toHaveBeenCalledWith({"page": 1})
    });

    

 })