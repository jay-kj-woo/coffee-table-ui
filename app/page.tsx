'use client';

import pageData from '@/data/table_page.json';
import { CagetorySection } from './components/categorySection/CategorySection';
import { MenuBar } from './components/menuBar/MenuBar';
import { useState } from 'react';
import { CategoryHash } from './types/common.types';

export default function Home() {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryHash>('#coffeeTables');

  return (
    <main>
      <div className="px-5 py-4 xl:px-20">
        <div className="flex flex-col pl-4 xl:pl-0">
          <h1 className="font-quincyCF text-[44px] font-normal leading-[46px] text-main-500 xl:text-[60px]">
            Tables
          </h1>
          <span className=" font-larsseit text-lg font-normal text-dark-500 xl:text-[20px]">
            A perfect pairing to your sofa.
          </span>
        </div>
      </div>
      <MenuBar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      {pageData.map((data) => (
        <CagetorySection
          key={data.id}
          title={data.category}
          products={data.products}
          setCurrentCategory={setCurrentCategory}
        />
      ))}
    </main>
  );
}
