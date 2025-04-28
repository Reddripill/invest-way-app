import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { currencies } from "@/constants/currencies";
import { SetStateType } from "@/types/main.types";

const currencyLabels = Object.keys(currencies) as (keyof typeof currencies)[];

// const API_KEY = "0d7e64e395e59cff4e1ee12337b04241";
const API_KEY = "0d7e64e395e59cff4e1ee12337b04241231231";

interface IProps {
   currency: keyof typeof currencies;
   setCurrency: SetStateType<keyof typeof currencies>;
   oppositeCurrency: keyof typeof currencies;
   setOppositeCurrency: SetStateType<keyof typeof currencies>;
   rate: string | number;
   setRate: SetStateType<string | number>;
   setOppositeRate: SetStateType<string | number>;
}

const CurrencyInput = ({
   currency,
   setCurrency,
   oppositeCurrency,
   setOppositeCurrency,
   rate,
   setRate,
   setOppositeRate,
}: IProps) => {
   const fetchRate = async (
      amount: number | string,
      setAmount: SetStateType<string | number>
   ) => {
      try {
         const url = `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${currency}&to=${oppositeCurrency}&amount=${amount}`;
         const res = await fetch(url);
         const data = await res.json();
         if (data.success) {
            setAmount(parseFloat(data.result));
         } else {
            console.error("Ошибка API:", data);
            return null;
         }
      } catch (err) {
         console.error("Ошибка при запросе к exchanger.host:", err);
         return null;
      }
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
   return (
      <>
         <Select
            value={currency}
            onChange={(e) =>
               changeSelectHandler(
                  e,
                  setCurrency,
                  setOppositeCurrency,
                  currency,
                  oppositeCurrency
               )
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
         <div className="w-full font-light font-roboto md:text-7xl text-5xl flex items-center gap-x-5">
            <div>{currencies[currency].symbol}</div>
            <input
               value={rate}
               type="text"
               onChange={(e) => handleChange(e, setRate, setOppositeRate)}
               onBlur={(e) => {
                  if (e.target.value === "") {
                     setRate(0);
                  }
               }}
               className="no-spinner appearance-none outline-none border-none m-0 w-full"
            />
         </div>
      </>
   );
};

export default CurrencyInput;
