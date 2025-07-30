import "./App.css";
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";
import SubmitText from "./components/SubmitText";
import { useState } from "react";
import type { TerrorState } from "./types";
function App() {
  const [submit, setSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TerrorState>({
    cardHolderName: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
  });
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[34.9rem]">
      <Cards />
      {submit ? (
        <SubmitText
          setSubmit={setSubmit}
          errors={errors}
          setErrors={setErrors}
        />
      ) : (
        <CardForm setSubmit={setSubmit} />
      )}
    </div>
  );
}

export default App;
