import React from 'react'
import { useTranslation } from 'react-i18next';
import { taxFilter } from '../utils/taxFilter'

export const FilterElements = ({taxValue, onClick, taxArrayValues}) => {
  const { t } = useTranslation();
 
  return (
    <ul className="mb-4">
            <li className="py-1 px-3" >
              <label className="flex items-center">
                <input type="checkbox" checked={taxArrayValues.includes(taxValue)} className="form-checkbox" data-testid="checkboxButton" onChange={onClick} />
                <span className="text-sm font-medium ml-2">{taxFilter(taxValue, t)}</span>
              </label>
            </li>
    </ul>
  )
}
