import CurrencyExchangerMain from "@/components/pages/currency-exchanger/Main";
import React from "react";

const CurrencyExchangerPage = () => {
   return (
      <div>
         <div className="container">
            <h2>Конвертер валют</h2>
            <CurrencyExchangerMain />
         </div>
      </div>
   );
};

export default CurrencyExchangerPage;
