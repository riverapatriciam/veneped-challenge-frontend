import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';

function Header() {
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* Suggested space for translation flags */}
            <ReactCountryFlag className='cursor-pointer' countryCode='GB' svg style={{
              marginTop: "3px",
              width: "2em",
              height: "2em"
             }}
             onClick={() => changeLanguage('en')}
             />
            <ReactCountryFlag className='cursor-pointer' countryCode='ES' svg style={{
              marginTop: "3px",
              width: "2em",
              height: "2em"
             }} 
             onClick={() => changeLanguage('es')}
             />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;