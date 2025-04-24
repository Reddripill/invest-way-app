import React from "react";
import { EstateIcon, NFTIcon, StockIcon } from "../svgs";

export interface ICard {
   title: string;
   logo: React.FC<React.SVGProps<SVGSVGElement>>;
   desctiption: string;
   options: string[];
}

export const cardList: ICard[] = [
   {
      title: "Консервативные",
      logo: EstateIcon,
      desctiption:
         "Оптимально для сохранения капитала и стабильного дохода без лишних волнений.",
      options: [
         "Банковский вклад",
         "Недвижимость",
         "ПИФы",
         "Валюта",
         "Драгоценные металлы (золото, серебро, платина)",
      ],
   },
   {
      title: "Сбалансированные",
      logo: StockIcon,
      desctiption:
         "Идеально для уверенного приумножения капитала при умеренном уровне риска.",
      options: [
         "Акции крупных компаний",
         "Дивидендные акции",
         "Краудлендинг / P2P-кредитование",
         "Биржевые фонды",
         "Облигации с более высоким купоном (риск/доход)",
      ],
   },
   {
      title: "Рискованные",
      logo: NFTIcon,
      desctiption:
         "Подходит для инвесторов, готовых к риску для достижения впечатляющего роста.",
      options: ["Криптовалюта", "Перспективные стартапы", "NFT", "IPO", "SPAC"],
   },
];
