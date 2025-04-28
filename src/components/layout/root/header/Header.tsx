"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useIntersectionObs } from "@/hooks/useIntersectionObs";
import styles from "./Header.module.css";
import cn from "classnames";
import { endopointList } from "@/constants/endpoints";
import LogoIcon from "@/components/icons/LogoIcon";

const Header = () => {
   const headerRef = useRef<HTMLElement>(null);
   const [isOpen, setIsOpen] = useState(false);
   const isIntersecting = useIntersectionObs(headerRef);
   const clickHandler = () => {
      setIsOpen(false);
   };
   useEffect(() => {
      if (isOpen) {
         document.body.classList.add("_lock-scroll");
      } else {
         document.body.classList.remove("_lock-scroll");
      }
      return () => {
         document.body.classList.remove("_lock-scroll");
      };
   }, [isOpen]);
   return (
      <header
         className={cn(styles.header, {
            [styles["_label"]]: !isIntersecting,
            [styles["_open"]]: isOpen,
         })}
         ref={headerRef}
      >
         <div
            className={cn(styles.wrapper, {
               [styles["_label"]]: !isIntersecting,
               [styles["_open"]]: isOpen,
            })}
         >
            <div className="container h-full">
               <div className="flex justify-between items-center h-full gap-x-8">
                  <Link
                     href="/"
                     className="flex items-center gap-x-4 text-3xl font-bold tracking-wider"
                  >
                     <div className="text-4xl text-accent">
                        <LogoIcon />
                     </div>
                     <div>InvestWay</div>
                  </Link>
                  <nav
                     className={cn(styles.nav, {
                        [styles["_open"]]: isOpen,
                     })}
                  >
                     <ul className={styles["nav-list"]}>
                        <li
                           className={styles["nav-item"]}
                           onClick={clickHandler}
                        >
                           <Link href="/">Главная</Link>
                        </li>
                        <li
                           className={styles["nav-item"]}
                           onClick={clickHandler}
                        >
                           <Link href="/">Новости</Link>
                        </li>
                        <li
                           className={styles["nav-item"]}
                           onClick={clickHandler}
                        >
                           <Link href="/">Калькулятор вкладов</Link>
                        </li>
                        <li
                           className={styles["nav-item"]}
                           onClick={clickHandler}
                        >
                           <Link href={endopointList.currency}>
                              Курсы валют
                           </Link>
                        </li>
                     </ul>
                  </nav>
                  <div
                     className={cn(styles.burger, {
                        [styles["_open"]]: isOpen,
                     })}
                     onClick={() => setIsOpen(!isOpen)}
                  >
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
