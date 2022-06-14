import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Transition from '../utils/Transition';
import { FilterElements } from './FilterElements';

function DropdownFilter({
  align, filter, setFilter
}) {

  const [taxArrayValues, setTaxArrayValues] = useState([]);

  const taxFilterArray = ["es_general_21", "es_reduced_10", "es_super-reduced_4", "fr_general_20", "fr_reduced_5.5"];

  const handleSaveArray = (tax) => {

    if(taxArrayValues.find(e => e === tax)){
      setTaxArrayValues(taxArrayValues.filter(e => e !== tax ))
    }else{
      setTaxArrayValues([...taxArrayValues, tax]);
    }
  }

  const handleClear = () => {
    setTaxArrayValues([]);
    setFilter({...filter, tax_filter: taxFilterArray, page:1})

  }

  const handleApply = () => {
    setFilter({...filter, tax_filter: taxArrayValues.length ?taxArrayValues:taxFilterArray})
  }
 

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const { t } = useTranslation();

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        data-testid="filterButton"
        aria-expanded={dropdownOpen}
      > {t('Impuestos')} </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">{t('Filtros')}</div>
            <div>
              {
                taxFilterArray.map( tax => (
                  <FilterElements key={tax} taxValue={tax} onClick={()=> handleSaveArray(tax)} taxArrayValues={taxArrayValues} />
                ))
              }
            </div>
    
    
          <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul className="flex items-center justify-between">
              <li>
                <button 
                  className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
                  data-testid="clearButton"
                  onClick={() => {
                    handleClear();
                    setDropdownOpen(false);
                  }}
                  >{t('Limpiar')}</button>
              </li>
              <li>
                <button 
                  className="btn-xs bg-blue-500 hover:bg-blue-600 text-white" 
                  data-testid="applyButton"
                  onClick={() => {
                    setDropdownOpen(false);
                    handleApply();
                  }} onBlur={() => setDropdownOpen(false)}>{t('Aplicar')}</button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
