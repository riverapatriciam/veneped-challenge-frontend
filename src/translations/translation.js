import i18n from 'i18next';
import {initReactI18next, Trans} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import React from "react";

i18n
 .use(initReactI18next)
 .use(LanguageDetector)
 .init({
  
    resources: {
        es: {
            translations: {
                "Catálogo":"Catálogo",
                "Productos":"Productos",
                "Impuestos":"Impuestos",
                "Sku":"Sku",
                "Articulo":"Articulo",
                "Precio":"Precio",
                "Impuesto":"Impuesto",
                "Stock":"Stock",
                "a":"a",
                "de":"de",
                "resultados":"resultados",
                "Vacio":"Vacio",
                "ES General - 21%":"ES General - 21%",
                "ES Reducido - 10%":"ES Reducido - 10%",
                "ES Super reducido - 4%": "ES Super reducido - 4%",
                "FR General - 20%": "FR General - 20%",
                "FR Reducido - 5.5%": "FR Reducido - 5.5%",
                "Aplicar":"Aplicar",
                "Limpiar":"Limpiar",
                "Buscar":"Buscar",
                "Filtros":"Filtros"
            }
        },
        en: {
            translations: {
                "Catálogo":"Catalogue",
                "Productos":"Products",
                "Impuestos":"Taxes",
                "Sku":"Sku",
                "Articulo":"Item",
                "Precio":"Price",
                "Impuesto":"Tax",
                "Stock":"Stock",
                "a":"to",
                "de":"of",
                "resultados":"results",
                "Vacio":"Empty",
                "ES General - 21%":"ES General - 21%",
                "ES Reducido - 10%":"ES Reduced - 10%",
                "ES Super reducido - 4%": "ES Super reduced - 4%",
                "FR General - 20%": "FR General - 20%",
                "FR Reducido - 5.5%": "FR Reduced - 5.5%",
                "Aplicar":"Apply",
                "Limpiar":"Clear",
                "Buscar":"Search",
                "Filtros":"Filters"
            }
        }
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
         wait: true
    }
 });

export default i18n;