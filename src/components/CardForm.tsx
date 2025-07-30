import { useState } from "react";
import { handleChange, handleSubmit, checkIfNoErrors } from "../formFunctions";
type formState = {
  cardHolderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};
type errorState = {
  cardHolderName: boolean;
  cardNumber: boolean;
  expMonth: boolean;
  expYear: boolean;
  cvc: boolean;
};
export default function CardForm({
  setSubmit,
}: {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formValues, setFormValues] = useState<formState>({
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState<errorState>({
    cardHolderName: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  });
  // const isDigitsOnly = (value: string) => /^\d*$/.test(value);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   if (name === "cardNumber") {
  //     const noSpaces = value.replace(/\s/g, "").slice(0, 16);
  //     const formatted = noSpaces.match(/.{1,4}/g)?.join(" ") || "";
  //     setFormValues({ ...formValues, [name]: formatted });
  //   } else if (["expMonth", "expYear", "cvc"].includes(name)) {
  //     if (isDigitsOnly(value)) {
  //       setFormValues({ ...formValues, [name]: value });
  //     }
  //   } else {
  //     setFormValues({ ...formValues, [name]: value });
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newErrors = {
  //     cardHolderName: !formValues.cardHolderName.trim(),
  //     cardNumber:
  //       !isDigitsOnly(formValues.cardNumber.replace(/\s/g, "")) ||
  //       formValues.cardNumber.length < 16,
  //     expMonth: !formValues.expMonth.trim(),
  //     expYear: !formValues.expYear.trim(),
  //     cvc: !formValues.cvc.trim() || formValues.cvc.length < 3,
  //   };
  //   setErrors(newErrors);
  //   checkIfNoErrors(newErrors);
  // };

  // const checkIfNoErrors = (
  //   newErrors: { [s: string]: unknown } | ArrayLike<unknown>
  // ) => {
  //   if (Object.values(newErrors).every((value) => value === false)) {
  //     setSubmit(true);
  //   }
  // };
  return (
    <form
      className="mt-[9.2rem] flex flex-col text-start text-[#21092f]
   text-[1.2rem] font-medium px-[2.4rem] gap-[2rem] pb-[4.5rem]
   self-center xl:gap-[2.6rem] xl:m-[unset]"
      onSubmit={(e) =>
        handleSubmit(e, formValues, setErrors, (errors) =>
          checkIfNoErrors(errors, setSubmit)
        )
      }
    >
      <div className="flex flex-col gap-[0.9rem]">
        <label className="uppercase tracking-[0.2rem]" htmlFor="cardHolderName">
          Cardholder Name
        </label>
        <input
          type="text"
          name="cardHolderName"
          id="cardHolderName"
          placeholder="e.g. Jane Appleseed"
          className={`border border-[#dfdee0] 
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem] 
          text-[1.8rem] ${
            errors.cardHolderName ? "outline outline-2 outline-[#ff5050]" : ""
          }`}
          value={formValues.cardHolderName}
          onChange={(e) => handleChange(e, formValues, setFormValues)}
        />
        {errors.cardHolderName && (
          <p className="text-[#ff5050] text-[1.2rem] font-medium">
            Can't be blank
          </p>
        )}
      </div>

      <div className="flex flex-col gap-[0.9rem]">
        <label className="uppercase tracking-[0.2rem]" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          className={`border border-[#dfdee0]
          rounded-[0.8rem] pl-[1.6rem] py-[1.1rem]
          text-[1.8rem] ${
            errors.cardNumber ? "outline outline-2 outline-[#ff5050]" : ""
          }`}
          value={formValues.cardNumber}
          onChange={(e) => handleChange(e, formValues, setFormValues)}
          maxLength={19}
        />
        {errors.cardNumber && (
          <p className="text-[#ff5050] text-[1.2rem] font-medium">
            Wrong format, numbers only
          </p>
        )}
      </div>

      <div className="flex gap-[1.1rem] xl:gap-[2rem]">
        <div className="flex flex-col gap-[0.9rem]">
          <p className="uppercase tracking-[0.2rem]">
            Exp. Date (<label htmlFor="expMonth">MM</label>/
            <label htmlFor="expYear">YY</label>)
          </p>
          <div className="flex gap-[0.8rem] xl:gap-[1rem]">
            <input
              type="text"
              name="expMonth"
              id="expMonth"
              placeholder="MM"
              className={`border border-[#dfdee0] 
                rounded-[0.8rem] pl-[1.6rem] py-[1.1rem]
                w-[7.2rem]
                text-[1.8rem]
                xl:w-[8rem] ${
                  errors.expMonth ? "outline outline-2 outline-[#ff5050]" : ""
                }`}
              value={formValues.expMonth}
              onChange={(e) => handleChange(e, formValues, setFormValues)}
              maxLength={2}
            />
            <input
              type="text"
              name="expYear"
              id="expYear"
              placeholder="YY"
              className={`border border-[#dfdee0] 
                rounded-[0.8rem] pl-[1.6rem] py-[1.1rem]
                w-[7.2rem]
                text-[1.8rem]
                xl:w-[8rem] ${
                  errors.expYear ? "outline outline-2 outline-[#ff5050]" : ""
                }`}
              value={formValues.expYear}
              onChange={(e) => handleChange(e, formValues, setFormValues)}
              maxLength={2}
            />
          </div>
          {(errors.expMonth || errors.expYear) && (
            <p className="text-[#ff5050] text-[1.2rem] font-medium">
              Can't be blank
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-[0.9rem]">
          <label className="uppercase tracking-[0.2rem]" htmlFor="cvc">
            CVC
          </label>
          <input
            type="text"
            name="cvc"
            id="cvc"
            placeholder="e.g. 123"
            className={`border border-[#dfdee0] 
              rounded-[0.8rem] pl-[1.6rem] py-[1.1rem]
              w-full
              text-[1.8rem] ${
                errors.cvc ? "outline outline-2 outline-[#ff5050]" : ""
              }`}
            value={formValues.cvc}
            onChange={(e) => handleChange(e, formValues, setFormValues)}
            maxLength={3}
          />
          {errors.cvc && (
            <p className="text-[#ff5050] text-[1.2rem] font-medium">
              Can't be blank
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
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
