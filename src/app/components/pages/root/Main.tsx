import { cardList } from "@/app/constants/cards";
import Image from "next/image";
import React from "react";
import Card from "../../UI/Card";
import Table from "../../UI/Table";

const Main = () => {
   return (
      <>
         <section>
            <div className="container">
               <h1 className="text-center">Что такое инвестиции?</h1>
               <div className="flex max-lg:flex-col justify-center lg:justify-between lg:items-start lg:max-w-[1265px] lg:mx-auto gap-8">
                  <div className="flex-1/2 lg:max-w-[580px] max-lg:order-2">
                     <Image
                        src="/main.jpg"
                        width={580}
                        height={465}
                        className="rounded-main mx-auto"
                        alt="Коротко об инвестициях"
                     />
                  </div>
                  <div className="flex flex-col lg:gap-y-6 gap-y-4 flex-1/2 lg:max-w-[580px] max-lg:order-1">
                     <p className="text-lg font-medium">
                        Инвестиции — это процесс размещения капитала с целью
                        получения прибыли или прироста стоимости активов в
                        будущем. Они представляют собой один из ключевых
                        инструментов финансового планирования и играют важную
                        роль в обеспечении долгосрочной финансовой стабильности
                        как для частных лиц, так и для организаций.
                     </p>
                     <p className="text-lg font-medium">
                        В основе инвестирования лежит идея о том, что свободные
                        денежные средства могут быть направлены на приобретение
                        активов с расчётом на последующее увеличение их
                        стоимости или получение регулярного дохода.
                     </p>
                     <p className="text-lg font-medium">
                        Инвестиции предполагают определённый уровень риска. Тем
                        не менее, при грамотном подходе инвестиции являются
                        эффективным способом сохранения и приумножения капитала.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className="container">
               <h2>Способы инвестирования</h2>
               <div className="sm:grid sm:gap-9 sm:grid-cols-[repeat(auto-fit,minmax(375px,1fr))] justify-center">
                  {cardList.map((card) => (
                     <div key={card.title} className="max-sm:mb-9 last:mb-0">
                        <Card {...card} />
                     </div>
                  ))}
               </div>
            </div>
         </section>
         <section>
            <div className="container">
               <Table />
            </div>
         </section>
      </>
   );
};

export default Main;
