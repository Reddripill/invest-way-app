export interface InvestmentData {
   criteria: string;
   conservative: string;
   balanced: string;
   breakthrough: string;
}

export const data: InvestmentData[] = [
   {
      criteria: "Цель",
      conservative: "Сохранение капитала",
      balanced: "Умеренный рост капитала",
      breakthrough: "Агрессивный рост и высокая доходность",
   },
   {
      criteria: "Риск",
      conservative: "Низкий",
      balanced: "Средний",
      breakthrough: "Высокий",
   },
   {
      criteria: "Ожидаемая доходность",
      conservative: "3–6% в год",
      balanced: "6–12% в год",
      breakthrough: "15%+",
   },
   {
      criteria: "Уровень знаний",
      conservative: "Минимальный",
      balanced: "Средний",
      breakthrough: "Высокий или готовность к обучению",
   },
   {
      criteria: "Примеры инструментов",
      conservative: "Вклады, облигации, ПИФы, валюта, драгметаллы",
      balanced: "Акции, фонды, дивиденды, краудлендинг",
      breakthrough: "IPO, крипта, стартапы, SPAC, NFT",
   },
   {
      criteria: "Горизонт инвестирования",
      conservative: "1–3 года",
      balanced: "3–7 лет",
      breakthrough: "5+ лет или спекулятивно",
   },
   {
      criteria: "Подходит кому",
      conservative: "Тем, кто хочет спокойствия",
      balanced: "Тем, кто балансирует риск и доход",
      breakthrough: "Тем, кто готов рисковать ради роста",
   },
   {
      criteria: "Волатильность активов",
      conservative: "Низкая",
      balanced: "Умеренная",
      breakthrough: "Высокая",
   },
   {
      criteria: "Портфельная роль",
      conservative: "Ядро безопасности",
      balanced: "Баланс стабильности и роста",
      breakthrough: "Спекулятивное дополнение",
   },
];
