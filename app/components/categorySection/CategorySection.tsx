import { Product } from '@/domain/Product';
import { ProductCard } from '../productCard/ProductCard';

interface Props {
  title: string;
  products: Product[];
}

export const CagetorySection = ({ title, products }: Props) => {
  const formattedTitle = title
    .split(' ')
    .map((string, index) => (index === 0 ? string.toLowerCase() : string))
    .join('');
  return (
    <section id={formattedTitle}>
      <div className="px-0 pb-0 pt-8 ">
        <div className="font-quincy text-main-500 text-center  text-[32px] font-bold">
          {title}
        </div>
      </div>
      <div className="col relative grid grid-cols-2  justify-items-center gap-x-4 gap-y-10 px-4  py-6">
        {products.map((product) => (
          <ProductCard key={`${title}_${product.id}`} product={product} />
        ))}
      </div>
    </section>
  );
};
