'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { DropDownMenu } from './DropDownMenu';
import { CategoryHash } from '@/app/types/common.types';
import { CATEGORY_HASH_TO_USER_LANGUAGE } from '@/app/utils/mappers';

interface Props {
  currentCategory: CategoryHash;
  setCurrentCategory: Dispatch<SetStateAction<CategoryHash>>;
}

export const MenuBar = ({ currentCategory, setCurrentCategory }: Props) => {
  return (
    <div className=" sticky top-0 z-50">
      <div className="relative flex h-[60px]  justify-between  bg-dark-500 py-5  pl-8 pr-4 text-light-700 ">
        <div className=" font-light">
          {CATEGORY_HASH_TO_USER_LANGUAGE[currentCategory]}
        </div>
        <DropDownMenu setCurrentCategory={setCurrentCategory} />
      </div>
    </div>
  );
};
