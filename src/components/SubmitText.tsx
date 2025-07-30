export default function SubmitText({
  setSubmit,
}: {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="flex flex-col items-center mt-[9.1rem] 
    px-[2.4rem] xl:justify-center xl:m-[unset] xl:ml-[10rem] xl:w-[38.1rem]"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_524)" />
        <path
          d="M28 39.9199L36.0801 48L52.0801 32"
          stroke="white"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_524"
            x1="-23.0143"
            y1="11.5071"
            x2="1.03143e-06"
            y2="91.5071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <h1
        className="text-[#21092f] text-[2.8rem] font-medium 
      tracking-[3.422px] mt-[3.5rem]"
      >
        THANK YOU!
      </h1>
      <p className="text-[#8f8694] text-[1.8rem] font-medium mt-[1.6rem]">
        We've added your card details
      </p>
      <button
        className="py-[1.5rem] bg-[#21092f] 
      w-full rounded-[0.8rem] mt-[4.8rem] text-[#fff] text-[1.8rem]
      font-medium cursor-[pointer] max-w-[38.1rem]"
        onClick={() => setSubmit(false)}
      >
        Continue
      </button>
    </div>
  );
}
