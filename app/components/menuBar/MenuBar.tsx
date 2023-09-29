'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { DropDownMenu } from './DropDownMenu';
import { CategoryHash } from '@/app/types/common.types';
import { CATEGORY_HASH_TO_USER_LANGUAGE } from '@/app/utils/mappers';
import { HorizontalMenu } from './HorizontalMenu';

interface Props {
  currentCategory: CategoryHash;
  setCurrentCategory: Dispatch<SetStateAction<CategoryHash>>;
}

export const MenuBar = ({ currentCategory, setCurrentCategory }: Props) => {
  return (
    <div className=" sticky top-0 z-50">
      <div className="relative flex h-[60px]  justify-between bg-dark-500  py-5 pl-8  pr-4 text-light-700  tablet:items-center tablet:px-20 tablet:py-0 ">
        <div className=" font-light tablet:hidden tablet:h-0 tablet:w-0">
          {CATEGORY_HASH_TO_USER_LANGUAGE[currentCategory]}
        </div>
        <div className="hidden h-0 w-0  tablet:flex tablet:h-full tablet:w-full">
          <HorizontalMenu
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
        </div>
        <DropDownMenu setCurrentCategory={setCurrentCategory} />
      </div>
    </div>
  );
};
