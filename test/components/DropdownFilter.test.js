import {render, fireEvent, screen} from '@testing-library/react'
import DropdownFilter from '../../src/components/DropdownFilter';

jest.mock('react-i18next', () => {
    return {
        useTranslation: () => ({ t: (value) => value})
    }
})

describe('Pruebas en el componente DrpdownFilter', () => { 
    
    const funcionPrueba = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = render(<DropdownFilter align="right" filter={{}} setFilter={funcionPrueba} />)
    });
    
    test('Debe mostrar los impuestos al hacer click en el boton', () => {
     
        fireEvent.click(screen.getByTestId("filterButton"))

        expect(screen.queryByText("ES General - 21%")).toBeTruthy()
        expect(screen.queryByText("ES Reducido - 10%")).toBeTruthy()
        expect(screen.queryByText("ES Super reducido - 4%")).toBeTruthy()
        expect(screen.queryByText("FR General - 20%")).toBeTruthy()
        expect(screen.queryByText("FR Reducido - 5.5%")).toBeTruthy()
     });

     test('Debe Limpiar los filtros al hacer click en el boton `Limpiar`', () => { 
        const texFilter = [];
        const setFilter = {"page": 1, "tax_filter": ["es_general_21", "es_reduced_10", "es_super-reduced_4", "fr_general_20", "fr_reduced_5.5"]}
        
        fireEvent.click(screen.getByTestId("clearButton"));

        expect(funcionPrueba).toHaveBeenCalledWith((texFilter, setFilter))
      });

      test('Debe Aplicar los filtros seleccionados al hacer click en el boton `Aplicar`', () => { 
        const setFilter = {"tax_filter": ["es_general_21", "es_reduced_10"]};
        
        fireEvent.click(screen.getAllByTestId("checkboxButton")[0]);
        fireEvent.click(screen.getAllByTestId("checkboxButton")[1]);
        fireEvent.click(screen.getByTestId("applyButton"));
        expect(funcionPrueba).toHaveBeenCalledWith((setFilter))
      });
 })