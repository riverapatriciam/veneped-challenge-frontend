import {render, fireEvent, screen} from '@testing-library/react';
import SearchForm from '../../../src/partials/actions/SearchForm';


jest.mock('react-i18next', () => {
    return {
        useTranslation: () => ({ t: (value) => value})
    }
})

describe('Pruebas en el componente SearchForm', () => { 
    
    test('Debe cambiar la caja de texto', () => {

        const {queryByPlaceholderText} = render(<SearchForm placeholder={('Buscar')} filterData={{}} setFilter={() => {}} />);
        const searchTextInput = queryByPlaceholderText('Buscar')

        fireEvent.change(searchTextInput, {target: { value: 'test'}})

        expect(searchTextInput.value).toBe('test')

     });

     test('Debe llamar la funcion setFilter al hacer click', () => {
        
        const funcionPrueba = jest.fn((value) => {});

        const {queryByPlaceholderText} = render(<SearchForm placeholder={('Buscar')} filterData={{}} setFilter={funcionPrueba} />);
        const searchTextInput = queryByPlaceholderText('Buscar');
        const setFilter = {"title_filter": "test"}

        fireEvent.change(searchTextInput, {target: { value: 'test'}})
        fireEvent.click(screen.getByTestId("searchTextButton"));

        expect(funcionPrueba).toHaveBeenCalledWith((setFilter))

     });

     test('Debe llamar la funcion setFilter al hacer enter', () => {
        
        const funcionPrueba = jest.fn((value) => {});

        const {queryByPlaceholderText} = render(<SearchForm placeholder={('Buscar')} filterData={{}} setFilter={funcionPrueba} />);
        
        const searchTextInput = queryByPlaceholderText('Buscar');
        const setFilter = {"title_filter": "test"}

        fireEvent.change(searchTextInput, {target: { value: 'test'}})
        fireEvent.submit(screen.getByTestId("searchTextButton"));

        expect(funcionPrueba).toHaveBeenCalledWith((setFilter))

     });
    
 })