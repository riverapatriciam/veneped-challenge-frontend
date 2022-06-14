
export const taxFilter = (tax, t) => {


    switch (tax) {
        case "es_general_21": 
            return t('ES General - 21%')

        case "es_reduced_10": 
            return t('ES Reducido - 10%')

        case "es_super-reduced_4": 
            return t('ES Super reducido - 4%' )

        case "fr_general_20": 
            return t('FR General - 20%')

        case "fr_reduced_5.5": 
            return t('FR Reducido - 5.5%')
        
        default:
            return '';
    }

    
}