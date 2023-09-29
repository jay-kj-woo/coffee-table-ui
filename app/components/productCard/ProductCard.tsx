import { Product } from '@/domain/Product';
import { CardImage } from './CardImage';
import { CardDescription } from './CardDescription';

interface Props {
  product: Product;
}

const COLOR_VARIANTS: Record<Colors, string> = {
  Walnut: 'bg-Walnut',
  Oak: 'bg-Oak',
  'Black Wood': 'bg-BlackWood',
  Solstice: 'bg-Solstice',
  Twilight: 'bg-Twilight',
  Espresso: 'bg-Espresso',
  Eclipse: 'bg-Eclipse',
};
export const ProductCard = ({ product }: Props) => {
  const { title, price, imageUrl, color, discount } = product;

  return (
    <div className="md2lg:w-[300px] relative flex h-full w-[150px] flex-col items-center gap-[6px] sm:w-[180px] md:w-[190px]">
      <CardImage
        imageSrc={`/assets/images/${imageUrl}`}
        imageAlt={title}
        floatText={color}
        floatColor={COLOR_VARIANTS[color as Colors]}
      />
      <CardDescription title={title} price={price} discount={discount} />
    </div>
  );
};
