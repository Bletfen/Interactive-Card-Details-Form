export default function Cards() {
  return (
    <div
      className="w-full 
    bg-[url('/images/bg-main-mobile.png')] 
    h-[24rem] bg-no-repeat bg-cover"
    >
      <div
        className="w-[28.6rem] 
      bg-[linear-gradient(169deg,_#fff_5%,_#D2D3D9_91.69%)]
      h-[15.7rem] pt-[1.4rem] rounded-md flex flex-col gap-[1.5rem]"
      >
        <div className="w-full bg-[#2f2f2f] h-[3.4rem]"></div>
        <div
          className="w-[23rem] py-[0.9rem] pr-[1rem]
        text-end bg-[#adb5be] rounded-[0.4rem]
        self-center text-[9px] font-medium text-[#fff] tracking-[1.286px] "
        >
          123
        </div>
      </div>
    </div>
  );
}
