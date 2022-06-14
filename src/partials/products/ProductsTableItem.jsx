import React from 'react';
import { useTranslation } from 'react-i18next';

function ProductsTableItem({id, title, price, tax, stock}) {

  const {t} = useTranslation();

  const stockColor = (stock) => {
    switch (stock) {
      case 0:
        return (
          <p className='bg-red-100 text-red-600 inline-flex font-medium rounded-full text-center px-2.5 py-0.5'>
              {t('Vacio')}</p>
        );
  
      default:
        return (
          <p className='bg-emerald-100 text-emerald-600 inline-flex font-medium rounded-full text-center px-2.5 py-0.5'>
            {stock}
          </p>
        );
    }
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-sky-500">{(id).padStart(10,'0')}</div>
      </td>    
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`font-medium`}>{title}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5`}>{(`${price}`).replace('.',',')} €</div>
      </td >    
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="bg-blue-100 text-blue-600 inline-flex font-medium rounded-full text-center px-2.5 py-0.5">{tax}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 text-left whitespace-nowrap">
        <div className={`font-medium`}>{stockColor(stock)}</div>
      </td>
      <td className="pl-5 last:pr-1 py-3 whitespace-nowrap">
        <div className='flex items-stretch'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className='pl-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
   
      </td>

      
    </tr>
  );
}

export default ProductsTableItem;
