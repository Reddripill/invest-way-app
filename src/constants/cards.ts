import EstateIcon from "@/components/icons/EstateIcon";
import NftIcon from "@/components/icons/NftIcon";
import StockIcon from "@/components/icons/StockIcon";
import React from "react";
// import { EstateIcon, NFTIcon, StockIcon } from "@/svgs";

export interface ICard {
   title: string;
   logo: React.FC<React.SVGProps<SVGSVGElement>>;
   desctiption: string;
   options: string[];
}

export const cardList: ICard[] = [
   {
      title: "Консервативные",
      desctiption:
         "Оптимально для сохранения капитала и стабильного дохода без лишних волнений.",
      logo: EstateIcon,
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
      desctiption:
         "Идеально для уверенного приумножения капитала при умеренном уровне риска.",
      logo: StockIcon,
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
      desctiption:
         "Подходит для инвесторов, готовых к риску для достижения впечатляющего роста.",
      logo: NftIcon,
      options: ["Криптовалюта", "Перспективные стартапы", "NFT", "IPO", "SPAC"],
   },
];
