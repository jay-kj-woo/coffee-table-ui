import { CategoryHash } from '@/app/types/common.types';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

interface Props {
  currentCategory: CategoryHash;
  setCurrentCategory: Dispatch<SetStateAction<CategoryHash>>;
}
export const HorizontalMenu = ({
  currentCategory,
  setCurrentCategory,
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setCurrentCategory(e.currentTarget.hash as CategoryHash);
  };
  return (
    <div className="flex w-full items-center  justify-between xl:justify-start xl:gap-8">
      <a
        href="#coffeeTables"
        className={`   font-larsseit text-[18px] font-light leading-none text-light-700 ${
          currentCategory === '#coffeeTables' &&
          ' border-b-4 border-[#fff] pb-[14px]'
        }`}
        onClick={handleClick}
      >
        Coffee Tables
      </a>
      <a
        href="#sideTables"
        className={`   font-larsseit text-[18px] font-light leading-none text-light-700   ${
          currentCategory === '#sideTables' &&
          ' border-b-4 border-[#fff] pb-[14px]'
        }`}
        onClick={handleClick}
      >
        Side Tables
      </a>
      <a
        href="#mediaUnits"
        className={`   font-larsseit text-[18px] font-light leading-none text-light-700 ${
          currentCategory === '#mediaUnits' &&
          ' border-b-4 border-[#fff] pb-[14px]'
        }`}
        onClick={handleClick}
      >
        Media Units
      </a>
      <a
        href="#tableSets"
        className={`   font-larsseit text-[18px] font-light leading-none text-light-700 ${
          currentCategory === '#tableSets' &&
          ' border-b-4 border-[#fff] pb-[14px]'
        }`}
        onClick={handleClick}
      >
        Table Sets
      </a>
    </div>
  );
};
