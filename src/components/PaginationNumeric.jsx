import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePagination, DOTS } from '../hooks/usePagination';


function PaginationNumeric({
  filter, setFilter,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize= 10
}) {
  
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const onPageChange = (newPage) => {
    setFilter({...filter, page:newPage});
  }

  const enabledButtonClass = 'inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm';
  const disabledButtonClass = 'cursor-not-allowed inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300  shadow-sm'

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const {t} = useTranslation();
  return (
    <>
      <div className="flex justify-center">
        <nav className="flex" role="navigation" aria-label="Navigation">
          <div className="mr-2">
                <a href="#0"  
                      onClick={onPrevious} 
                      disabled={currentPage <= 1} 
                      data-testid="previusButtonTest"
                      className={ currentPage <= 1 ?  disabledButtonClass : enabledButtonClass }>
                    <span className="sr-only">Previous</span><wbr />
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                      <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                    </svg>
                  </a>
          </div>
          <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">

              {paginationRange?.map(pageNumber => {
            
                  if (pageNumber === DOTS) {
                    return (
                      <li key={Math.random()}>
                        <span className={`inline-flex items-center justify-center cursor-pointer leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400`}>…</span>
                      </li>)
                  }  
          
                  return (
                    <li
                      key={pageNumber}
                      className={`inline-flex items-center justify-center cursor-pointer leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 ${pageNumber === currentPage ? 'text-blue-500' : 'text-slate-600'}  hover:text-white`} href="#0"
                      data-testid={`pagination-number-${pageNumber}`}
                      onClick={() => {onPageChange(pageNumber)}}
                    >
                      {pageNumber}
                    </li>
                  );
              })}

          </ul>
          <div className="ml-2">
            {
              (currentPage === totalCount)?
              (
                <a href="#0" disabled={true}  className="cursor-not-allowed inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300 shadow-sm">
                  <span className="sr-only">Next</span><wbr />
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </a>)
                :(
                  <a href="#0"  
                    onClick={onNext} 
                    className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm"
                    data-testid="nextButtonTest"
                    >
                    <span className="sr-only">Next</span><wbr />
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                      <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                    </svg>
                  </a>
                )
            }
          </div>
        </nav>
      </div>
      <div className="flex justify-center">
        <div className="text-sm text-slate-500 text-center sm:text-left py-2">
          <span className="font-medium text-slate-600">{currentPage}</span> {t('a')} <span className="font-medium text-slate-600">{filter.per_page}</span> {t('de')} <span className="font-medium text-slate-600">{totalCount}</span> {t('resultados')}
        </div>
      </div>
    </>
  );
}

export default PaginationNumeric;