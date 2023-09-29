import { Product } from '@/domain/Product';
import { ProductCard } from '../productCard/ProductCard';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { CategoryHash } from '@/app/types/common.types';
import { useInView } from 'react-intersection-observer';

interface Props {
  title: string;
  products: Product[];
  setCurrentCategory: Dispatch<SetStateAction<CategoryHash>>;
}

export const CagetorySection = ({
  title,
  products,
  setCurrentCategory,
}: Props) => {
  const { ref, inView, entry } = useInView({ threshold: 0.15 });
  useEffect(() => {
    if (inView && entry) {
      setCurrentCategory(`#${entry.target.id}` as CategoryHash);
      // console.log(entry.target.id);
    }
  }, [inView, setCurrentCategory, entry]);
  const formattedTitle = title
    .split(' ')
    .map((string, index) => (index === 0 ? string.toLowerCase() : string))
    .join('');
  return (
    <section id={formattedTitle} ref={ref}>
      <div className="px-0 pb-0 pt-8 ">
        <div className="text-center font-quincy text-[32px]  font-bold text-main-500">
          {title}
        </div>
      </div>
      <div className=" relative grid grid-cols-2  justify-center justify-items-center gap-x-4 gap-y-10 px-4 py-4  sm:px-1">
        {products.map((product) => (
          <ProductCard key={`${title}_${product.id}`} product={product} />
        ))}
      </div>
    </section>
  );
};
