import { taxFilter } from "../../src/utils/taxFilter";


describe('Pruebas en el la función taxFilter', () => { 
    test('Debe retornar un arreglo vacio', () => { 
        expect(taxFilter()).toBe('');
     });
     
     test('Debe retornar ES General - 21%', () => { 
        expect(taxFilter('es_general_21', (value) => value)).toBe('ES General - 21%');
     });

     test('Debe retornar ES Reducido - 10%', () => { 
        expect(taxFilter('es_reduced_10', (value) => value)).toBe('ES Reducido - 10%');
     });

     test('Debe retornar ES Super reducido - 4%', () => { 
        expect(taxFilter('es_super-reduced_4', (value) => value)).toBe('ES Super reducido - 4%');
     });

     test('Debe retornar FR General - 20%', () => { 
        expect(taxFilter('fr_general_20', (value) => value)).toBe('FR General - 20%');
     });
     test('Debe retornar FR Reducido - 5.5%', () => { 
        expect(taxFilter('fr_reduced_5.5', (value) => value)).toBe('FR Reducido - 5.5%');
     });
 })