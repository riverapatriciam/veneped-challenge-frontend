import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import FilterButton from '../components/DropdownFilter';
import ProductsTable from '../partials/products/ProductsTable';
import PaginationNumeric from '../components/PaginationNumeric';
import { useGetData } from '../hooks/useGetData';
import { useTranslation } from 'react-i18next';

function Products() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {data, filter, setFilter, pagination} = useGetData();

  const { t } = useTranslation();

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">{t('Catálogo')}</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm placeholder={t('Buscar')} filterData={filter} setFilter={setFilter} />
                {/* Filter button */}
                <FilterButton align="right" filter={filter} setFilter={setFilter} />
              </div>

            </div>

            {/* Table */}
            <ProductsTable data={data} filter={filter} setFilter={setFilter} pagination={pagination} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric filter={filter} setFilter={setFilter} totalCount={pagination} currentPage={filter.page} />
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Products;