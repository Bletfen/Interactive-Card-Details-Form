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
const isDigitsOnly = (value: string) => /^\d*$/.test(value);

export const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  formValues: formState,
  setFormValues: React.Dispatch<React.SetStateAction<formState>>
) => {
  const { name, value } = event.target;
  if (name === "cardNumber") {
    const noSpaces = value.replace(/\s/g, "").slice(0, 16);
    const formatted = noSpaces.match(/.{1,4}/g)?.join(" ") || "";
    setFormValues({ ...formValues, [name]: formatted });
  } else if (["expMonth", "expYear", "cvc"].includes(name)) {
    if (isDigitsOnly(value)) {
      setFormValues({ ...formValues, [name]: value });
    }
  } else {
    setFormValues({ ...formValues, [name]: value });
  }
};

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  formValues: formState,
  setErrors: React.Dispatch<React.SetStateAction<errorState>>,
  checkIfNoErrors: (errors: errorState) => void
) => {
  e.preventDefault();
  const newErrors = {
    cardHolderName: !formValues.cardHolderName.trim(),
    cardNumber:
      !isDigitsOnly(formValues.cardNumber.replace(/\s/g, "")) ||
      formValues.cardNumber.length < 16,
    expMonth: !formValues.expMonth.trim(),
    expYear: !formValues.expYear.trim() || formValues.expYear.length < 2,
    cvc: !formValues.cvc.trim() || formValues.cvc.length < 3,
  };
  setErrors(newErrors);
  checkIfNoErrors(newErrors);
};

export const checkIfNoErrors = (
  newErrors: { [s: string]: unknown } | ArrayLike<unknown>,
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (Object.values(newErrors).every((value) => value === false)) {
    setSubmit(true);
  }
};
