export default function CardForm() {
  return (
    <form
      className="mt-[9.2rem] flex flex-col text-start text-[#21092f]
   text-[1.2rem] font-medium tracking-[0.2rem] uppercase px-[2.4rem]"
    >
      <div className="flex flex-col gap-[0.9rem]">
        <p>Cardholder Name</p>
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>

      <div>
        <p>Card Number</p>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <p>Exp. Date (MM/YY)</p>
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="YY" />
        </div>
        <div>
          <p>CVC</p>
          <input type="text" placeholder="e.g. 123" />
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
}
