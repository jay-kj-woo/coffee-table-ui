import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Prop {
  imageSrc: string | StaticImport;
  imageAlt: string;
  floatText: string;
  floatColor: string;
}
export const CardImage = ({
  imageSrc,
  imageAlt,
  floatText,
  floatColor,
}: Prop) => {
  return (
    <div className="relative h-[122px] w-full md:h-[142px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className="  max-h-full min-h-full min-w-full max-w-full rounded-xl bg-light-500"
      />

      <div className="absolute  bottom-0 right-0 z-10 flex items-end p-1 ">
        <div className="  flex h-5 justify-evenly gap-1 rounded-full border-[0.5px] border-[#bec8db] bg-[#fff] p-[4px] pl-[6px]">
          <div className="font-larsseit text-[8px] font-bold text-dark-500">
            {floatText}
          </div>
          <div className={`h-3 w-3 rounded-full ${floatColor}`}></div>
        </div>
      </div>
    </div>
  );
};
