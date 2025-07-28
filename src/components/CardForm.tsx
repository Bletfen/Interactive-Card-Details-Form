export default function CardForm() {
  return (
    <form
      className="mt-[9.2rem] flex flex-col text-start text-[#21092f]
   text-[1.2rem] font-medium px-[2.4rem] gap-[2rem]"
    >
      <div className="flex flex-col gap-[0.9rem]">
        <p className="uppercase tracking-[0.2rem]">Cardholder Name</p>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          text-[1.8rem]"
        />
      </div>

      <div className="flex flex-col gap-[0.9rem]">
        <p className="uppercase tracking-[0.2rem]">Card Number</p>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          text-[1.8rem]"
        />
      </div>

      <div className="flex gap-[1.1rem]">
        <div className="flex flex-col gap-[0.9rem]">
          <p className="uppercase tracking-[0.2rem]">Exp. Date (MM/YY)</p>
          <div className="flex gap-[0.8rem]">
            <input
              type="text"
              placeholder="MM"
              className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          w-[7.2rem]
          text-[1.8rem]"
            />
            <input
              type="text"
              placeholder="YY"
              className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          w-[7.2rem]
          text-[1.8rem]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[0.9rem]">
          <p className="uppercase tracking-[0.2rem]">CVC</p>
          <input
            type="text"
            placeholder="e.g. 123"
            className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          w-full
          text-[1.8rem]"
          />
        </div>
      </div>
      <button
        className="w-full bg-[#21092f] 
      text-[#fff] py-[1.5rem] rounded-[0.8rem]
      text-[1.8rem]
      font-medium cursor-[pointer]"
      >
        Confirm
      </button>
    </form>
  );
}
