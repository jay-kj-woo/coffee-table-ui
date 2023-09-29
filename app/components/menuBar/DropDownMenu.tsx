'use client';

import { CategoryHash } from '@/app/types/common.types';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';

interface Props {
  setCurrentCategory: Dispatch<SetStateAction<CategoryHash>>;
}

export const DropDownMenu = ({ setCurrentCategory }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuBar = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setCurrentCategory(e.currentTarget.hash as CategoryHash);
    setShowMenu(false);
  };

  return (
    <div className="">
      <div>
        <button onClick={toggleMenuBar}>
          <div className={`${showMenu ? ' rotate-180' : ''} `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </button>
      </div>
      {showMenu && (
        <div className="absolute right-0 z-20 flex w-full flex-col rounded-b-[4px] bg-dark-500 pb-4 pl-8 pr-4  pt-8">
          <a
            href="#coffeeTables"
            className=" pb-10  font-larsseit text-[18px] font-light leading-none text-light-700"
            onClick={handleClick}
          >
            Coffee Tables
          </a>
          <a
            href="#sideTables"
            className=" pb-10  font-larsseit text-[18px] font-light leading-none text-light-700"
            onClick={handleClick}
          >
            Side Tables
          </a>
          <a
            href="#mediaUnits"
            className=" pb-10  font-larsseit text-[18px] font-light leading-none text-light-700"
            onClick={handleClick}
          >
            Media Units
          </a>
          <a
            href="#tableSets"
            className=" pb-10  font-larsseit text-[18px] font-light leading-none text-light-700"
            onClick={handleClick}
          >
            Table Sets
          </a>
        </div>
      )}
    </div>
  );
};
