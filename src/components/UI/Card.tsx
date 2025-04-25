import React from "react";
import { MoveRight } from "lucide-react";
import { ICard } from "@/constants/cards";

const Card = ({ title, logo: Logo, desctiption, options }: ICard) => {
   return (
      <div className="h-full w-full sm:p-8 p-4 bg-accent rounded-main flex flex-col text-white">
         <div className="text-center sm:mb-8 mb-6">
            <Logo className="sm:size-[130px] size-[110px] mx-auto mb-6" />
            <h3 className="max-sm:text-2xl">{title}</h3>
         </div>
         <div className="grow mb-8">
            <h4 className="mb-5 max-sm:text-xl">{desctiption}</h4>
            <ul>
               {options.map((option) => (
                  <li key={option} className="list-disc ml-8 mb-2 last:mb-0">
                     {option}
                  </li>
               ))}
            </ul>
         </div>
         <button
            type="button"
            className="flex items-center gap-x-4 justify-center w-full h-12 bg-white text-black rounded-xl cursor-pointer"
         >
            <div className="text-xl font-semibold">Подробнее</div>
            <MoveRight />
         </button>
      </div>
   );
};

export default Card;
