interface Prop {
  title: string;
  price: string;
  discount?: string;
}

export const CardDescription = ({ title, price, discount }: Prop) => {
  return (
    <div className="relative flex max-h-[47px] w-full flex-col justify-start  gap-[2px]">
      <div className="w-full cursor-pointer font-campton text-xs  font-semibold text-main-500">
        {title}
      </div>
      <div className="flex h-[26px]  items-center gap-[2px] font-larsseit">
        <span className=" text-[8px] text-main-300 ">{price}</span>
        <span className=" text-[8px] text-main-300 ">|</span>
        {discount ? (
          <span className=" font-larsseit text-[8px] font-medium text-[#b35c1e]">
            {discount}
          </span>
        ) : (
          <span className=" relative flex items-center gap-1 text-[8px] font-bold text-dark-500 ">
            Customise
            <div className=" -translate-y-[1px] text-[9px]">
              <svg
                className=" h-[1em] w-[1em] "
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 6L17.07 7.393L24.65 15H4.5V17H24.65L17.07 24.573L18.5 26L28.5 16L18.5 6Z"
                  fill="#19142B"
                ></path>
              </svg>
            </div>
          </span>
        )}
      </div>
      {discount && (
        <span className=" relative flex items-center gap-1 text-[8px] font-bold text-dark-500 ">
          Customise
          <div className=" -translate-y-[1px] text-[9px]">
            <svg
              className=" h-[1em] w-[1em] "
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 6L17.07 7.393L24.65 15H4.5V17H24.65L17.07 24.573L18.5 26L28.5 16L18.5 6Z"
                fill="#19142B"
              ></path>
            </svg>
          </div>
        </span>
      )}
    </div>
  );
};
