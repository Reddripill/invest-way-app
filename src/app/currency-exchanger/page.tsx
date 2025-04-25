import React from "react";
import CurrencyExchangerMain from "@/components/tests/currency-exchanger/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Конвертация валюты",
};

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
