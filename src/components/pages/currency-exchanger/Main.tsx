"use client";
import React, { useState } from "react";
import { currencies } from "@/constants/currencies";
import { Repeat } from "lucide-react";
import CurrencyInput from "./CurrencyInput";

const CurrencyExchangerMain = () => {
   const [fromCurrency, setFromCurrency] =
      useState<keyof typeof currencies>("USD");
   const [toCurrency, setToCurrency] = useState<keyof typeof currencies>("RUB");
   const [fromRate, setFromRate] = useState<string | number>(0);
   const [toRate, setToRate] = useState<string | number>(0);

   const convertClickHandler = () => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setFromRate(toRate);
      setToRate(fromRate);
   };

   return (
      <div className="flex max-md:flex-col items-center justify-between md:gap-x-8 gap-y-10">
         <div className="md:flex-1/2 md:grow-0">
            <CurrencyInput
               currency={fromCurrency}
               oppositeCurrency={toCurrency}
               setCurrency={setFromCurrency}
               setOppositeCurrency={setToCurrency}
               rate={fromRate}
               setOppositeRate={setToRate}
               setRate={setFromRate}
            />
         </div>
         <div
            onClick={convertClickHandler}
            className="select-none basis-8 shrink-0 grow-0 flex justify-center rounded-full border-[2px] border-accent bg-accent text-white md:self-start p-4 cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-black"
         >
            <Repeat />
         </div>
         <div className="flex-1/2 md:grow-0">
            <CurrencyInput
               currency={toCurrency}
               oppositeCurrency={fromCurrency}
               setCurrency={setToCurrency}
               setOppositeCurrency={setFromCurrency}
               rate={toRate}
               setOppositeRate={setFromRate}
               setRate={setToRate}
            />
         </div>
      </div>
   );
};

export default CurrencyExchangerMain;
