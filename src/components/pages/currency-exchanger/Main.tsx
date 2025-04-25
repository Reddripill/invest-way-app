"use client";
import React, { useCallback, useState } from "react";
import { currencies } from "@/constants/currencies";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SetStateType } from "@/types/main.types";
import { Repeat } from "lucide-react";
// import { formatPrice } from "@/utils/formatPrice";

const currencyLabels = Object.keys(currencies) as (keyof typeof currencies)[];

const API_KEY = "0d7e64e395e59cff4e1ee12337b04241";

export default function CurrencyExchangerMain() {
   const [fromCurrency, setFromCurrency] =
      useState<keyof typeof currencies>("USD");
   const [toCurrency, setToCurrency] = useState<keyof typeof currencies>("RUB");
   const [fromRate, setFromRate] = useState<string | number>(0);
   const [toRate, setToRate] = useState<string | number>(0);

   const fetchRate = useCallback(
      async (
         amount: number | string,
         setAmount: SetStateType<string | number>
      ) => {
         try {
            const url = `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
               setAmount(parseFloat(data.result));
            } else {
               console.error("Ошибка API:", data);
               return null;
            }
         } catch (err) {
            console.error("Ошибка при запросе к FCSAPI:", err);
            return null;
         }
      },
      [fromCurrency, toCurrency]
   );

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      setAmount: SetStateType<string | number>,
      setConverted: SetStateType<string | number>
   ) => {
      const value = e.target.value;
      if (value) {
         fetchRate(value, setConverted);
      }
      if (value === "") {
         setAmount("");
      } else {
         const parsed = parseFloat(value);
         if (!isNaN(parsed)) {
            setAmount(parsed);
         }
      }
   };

   const convertClickHandler = () => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setFromRate(toRate);
      setToRate(fromRate);
   };

   const changeSelectHandler = (
      e: SelectChangeEvent<keyof typeof currencies>,
      setCurrency: SetStateType<keyof typeof currencies>,
      setOppositeCurrency: SetStateType<keyof typeof currencies>,
      currency: keyof typeof currencies,
      oppositeCurrency: keyof typeof currencies
   ) => {
      const value = e.target.value;
      if (value === oppositeCurrency) {
         setCurrency(oppositeCurrency);
         setOppositeCurrency(currency);
      } else {
         setCurrency(value as keyof typeof currencies);
      }
   };

   return (
      <div className="flex justify-between gap-x-8">
         <div className="flex-1/2 grow-0">
            <Select
               value={fromCurrency}
               onChange={
                  (e) =>
                     changeSelectHandler(
                        e,
                        setFromCurrency,
                        setToCurrency,
                        fromCurrency,
                        toCurrency
                     )
                  // setFromCurrency(e.target.value as keyof typeof currencies)
               }
               variant="standard"
               disableUnderline
               sx={{
                  borderBottom: "2px solid #429c8c", // синяя нижняя граница
                  borderRadius: 0,
                  paddingY: 0.5,
               }}
               MenuProps={{
                  PaperProps: {
                     sx: {
                        marginTop: "8px",
                        maxHeight: "300px", // ограничение по высоте
                     },
                  },
               }}
               className="w-full mb-10"
            >
               {currencyLabels.map((code) => (
                  <MenuItem key={code} value={code}>
                     <div className="font-bold text-lg">
                        {code} - {currencies[code].name}
                     </div>
                  </MenuItem>
               ))}
            </Select>
            <div className="w-full font-light font-roboto text-7xl flex items-center gap-x-5">
               <div>{currencies[fromCurrency].symbol}</div>
               <input
                  value={fromRate}
                  type="text"
                  onChange={(e) => handleChange(e, setFromRate, setToRate)}
                  onBlur={(e) => {
                     if (e.target.value === "") {
                        setFromRate(0);
                     }
                  }}
                  className="no-spinner appearance-none outline-none border-none m-0 w-full"
               />
            </div>
         </div>
         <div
            onClick={convertClickHandler}
            className="select-none basis-8 shrink-0 grow-0 flex justify-center rounded-full border-[2px] border-accent bg-accent text-white self-start p-4 cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-black"
         >
            <Repeat />
         </div>
         <div className="flex-1/2 grow-0">
            <Select
               value={toCurrency}
               onChange={
                  (e) =>
                     changeSelectHandler(
                        e,
                        setToCurrency,
                        setFromCurrency,
                        toCurrency,
                        fromCurrency
                     )
                  // setFromCurrency(e.target.value as keyof typeof currencies)
               }
               variant="standard"
               disableUnderline
               sx={{
                  borderBottom: "2px solid #429c8c",
                  borderRadius: 0,
                  paddingY: 0.5,
               }}
               MenuProps={{
                  PaperProps: {
                     sx: {
                        marginTop: "8px",
                        maxHeight: "300px",
                     },
                  },
               }}
               className="w-full mb-10"
            >
               {currencyLabels.map((code) => (
                  <MenuItem key={code} value={code}>
                     <div className="font-bold text-lg">
                        {code} - {currencies[code].name}
                     </div>
                  </MenuItem>
               ))}
            </Select>
            <div className="w-full font-light font-roboto text-7xl flex items-center gap-x-5">
               <div>{currencies[toCurrency].symbol}</div>
               <input
                  value={toRate}
                  onChange={(e) => handleChange(e, setToRate, setFromRate)}
                  onBlur={(e) => {
                     if (e.target.value === "") {
                        setToRate(0);
                     }
                  }}
                  type="text"
                  className="no-spinner appearance-none outline-none border-none m-0 w-full"
               />
            </div>
         </div>
      </div>
   );
}
