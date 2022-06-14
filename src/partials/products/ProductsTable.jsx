import React, { useState, useEffect } from 'react';
import Products from './ProductsTableItem';
import { taxFilter } from '../../utils/taxFilter';
import { TableHeader } from '../../components/TableHeader'
import { useTranslation } from 'react-i18next';
 
function ProductsTable({data, filter, setFilter, pagination}) {

  const { t } = useTranslation();

  const titleHeader = [
    {title:t('Sku'), value:'id'}, 
    {title:t('Articulo'), value:'title'}, 
    {title:t('Precio'), value:'price'}, 
    {title:t('Impuesto'), value:'tax'}, 
    {title:t('Stock'), value:'stock'}]; 

  const [order, setOrder] = useState(true);

  const handleOrder = (value) => {
    
    setOrder(!order);   
    const newOrder = order?'ASC':'DESC';
    setFilter({...filter, order: newOrder, order_by:value});
  }


  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">{t('Productos')}: <span className="text-slate-400 font-medium">{pagination}</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                {
                  titleHeader.map( name => (
                    <TableHeader 
                      key={name.title} 
                      titleHeader={name.title} 
                      onClick={() => handleOrder(name.value)} 
                      order={order} />
                  ))
                }

              </tr>
            </thead>
              
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {
                data.map(data => {
                  return (
                    <Products
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      price={data.price}
                      tax={ taxFilter(data.tax,t)}
                      stock={data.stock}
                    />
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ProductsTable;
