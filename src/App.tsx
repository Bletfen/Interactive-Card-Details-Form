import "./App.css";
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";
import SubmitText from "./components/SubmitText";
import { useState } from "react";
type formState = {
  cardHolderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};
function App() {
  const [submit, setSubmit] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<formState>({
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[34.9rem]">
      <Cards />
      {submit ? (
        <SubmitText
          setSubmit={setSubmit}
          formValues={formValues}
          setFormValue={setFormValues}
        />
      ) : (
        <CardForm setSubmit={setSubmit} />
      )}
    </div>
  );
}

export default App;
