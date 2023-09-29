interface Prop {
  title: string;
  price: string;
}

export const CardDescription = ({ title, price }: Prop) => {
  return (
    <div className="relative flex max-h-[47px] w-full flex-col justify-start  gap-[2px]">
      <div className="font-campton text-main-500 w-full cursor-pointer  text-xs font-semibold">
        {title}
      </div>
      <div className="font-larsseit flex items-center gap-[2px]">
        <span className=" text-main-300 text-[8px] ">{price}</span>
        <span className=" text-main-300 text-[8px] ">|</span>
        <span className=" text-dark-500 relative flex items-center gap-1 text-[8px] font-bold ">
          Customize
          <div className="text-[9px]">
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
      </div>
    </div>
  );
};
