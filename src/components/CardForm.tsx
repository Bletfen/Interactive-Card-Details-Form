import { useState } from "react";
type formState = {
  cardHolderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};
const cardRegex = /^\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}$/;
export default function CardForm() {
  const [formValues, setFormValues] = useState<formState>({
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors(true);
    if (!cardRegex.test(formValues.cardNumber)) {
      return;
    }
  }
  return (
    <form
      className="mt-[9.2rem] flex flex-col text-start text-[#21092f]
   text-[1.2rem] font-medium px-[2.4rem] gap-[2rem] pb-[4.5rem]
   self-center xl:gap-[2.6rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-[0.9rem]">
        <p className="uppercase tracking-[0.2rem]">Cardholder Name</p>
        <input
          type="text"
          name="cardHolderName"
          placeholder="e.g. Jane Appleseed"
          className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          text-[1.8rem]"
          onChange={handleChange}
        />
        {errors && formValues.cardHolderName === "" && <p>Can't be blank</p>}
      </div>

      <div className="flex flex-col gap-[0.9rem]">
        <p className="uppercase tracking-[0.2rem]">Card Number</p>
        <input
          type="text"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          text-[1.8rem]"
          onChange={handleChange}
        />
        {errors && !cardRegex.test(formValues.cardNumber) && (
          <p>Wrong format, numbers only</p>
        )}
      </div>

      <div className="flex gap-[1.1rem] xl:gap-[2rem]">
        <div className="flex flex-col gap-[0.9rem]">
          <p className="uppercase tracking-[0.2rem]">Exp. Date (MM/YY)</p>
          <div className="flex gap-[0.8rem] xl:gap-[1rem]">
            <input
              type="text"
              name="expMonth"
              placeholder="MM"
              className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          w-[7.2rem]
          text-[1.8rem]
          xl:w-[8rem]"
            />
            <input
              type="text"
              name="expYear"
              placeholder="YY"
              className="border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] outline-none
          w-[7.2rem]
          text-[1.8rem]
          xl:w-[8rem]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[0.9rem]">
          <p className="uppercase tracking-[0.2rem]">CVC</p>
          <input
            type="text"
            name="cvc"
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
      text-[1.8rem] mt-[0.8rem]
      font-medium cursor-[pointer] xl-[1.4rem]"
      >
        Confirm
      </button>
    </form>
  );
}
