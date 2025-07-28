export default function Cards() {
  return (
    <div
      className="w-full 
    bg-[url('/images/bg-main-mobile.png')] 
    h-[24rem] bg-no-repeat bg-cover
    flex flex-col pr-[1.6rem] pt-[3.2rem] pl-[1.6rem] 
    relative items-center xl:w-[48.3rem] 
    xl:h-screen xl:bg-[url('/images/bg-main-desktop.png')]
    xl:p-[unset]"
    >
      <div
        className="w-[28.6rem] 
      bg-[linear-gradient(169deg,_#fff_5%,_#D2D3D9_91.69%)]
      h-[15.7rem] pt-[1.4rem] 
      rounded-md flex flex-col gap-[1.5rem] ml-[7.3rem]
      xl:mt-[46.9rem] xl:bg-[url('images/bg-card-back.png')]
      xl:bg-no-repeat xl:bg-center xl:w-[44.7rem] xl:h-[24.5rem]
      xl:m-[unset] xl:transform xl:translate-x-1/2"
      >
        <div className="w-full bg-[#2f2f2f] h-[3.4rem] xl:hidden"></div>
        <div
          className="w-[23rem] py-[0.9rem] pr-[1rem]
        text-end bg-[#adb5be] rounded-[0.4rem]
        self-center text-[9px] font-medium 
        text-[#fff] tracking-[1.286px] xl:hidden"
        >
          123
        </div>
      </div>

      <div
        className="absolute w-[28.5rem] 
      pt-[1.7rem] px-[1.9rem] pb-[2rem]
      bg-[url(/images/bg-card-front.png)] bg-cover bg-no-repeat
      rounded-md text-[#fff] font-medium mt-[9.5rem] mr-[7.3rem]
      xl:mt-[18.7rem] xl:w-[44.7rem] xl:h-[24.5rem]
      xl:mr-[unset] xl:transform xl:translate-x-[28.63%]
      "
      >
        <svg
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[5.4rem] h-[3rem] xl:w-[8.4rem] xl:h-[4.7rem]"
        >
          <ellipse cx="15.0932" cy="15" rx="15.0932" ry="15" fill="white" />
          <path
            d="M47.2081 8.75C50.686 8.75004 53.5001 11.5512 53.5001 15C53.5001 18.4488 50.686 21.25 47.2081 21.25C43.7303 21.25 40.9161 18.4489 40.9161 15C40.9161 11.5511 43.7303 8.75 47.2081 8.75Z"
            stroke="white"
          />
        </svg>
        <p className="text-[1.8rem] tracking-[2.2px] mt-[3.7rem]">
          9591 6489 6389 1011
        </p>
        <div
          className="uppercase flex
        justify-between mt-[1.7rem]"
        >
          <span>felicia leire</span>
          <span>09/26</span>
        </div>
      </div>
    </div>
  );
}
