import "./App.css";
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";
import SubmitText from "./components/SubmitText";
import { useState } from "react";
import type { formState } from "./types";
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
      <Cards formValues={formValues} />
      {submit ? (
        <SubmitText
          setSubmit={setSubmit}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      ) : (
        <CardForm
          setSubmit={setSubmit}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </div>
  );
}

export default App;
