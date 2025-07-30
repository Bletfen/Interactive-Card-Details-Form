import "./App.css";
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";
import SubmitText from "./components/SubmitText";
import { useState } from "react";
function App() {
  const [submit, setSubmit] = useState<boolean>(false);
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[34.9rem]">
      <Cards />
      {submit ? <SubmitText /> : <CardForm setSubmit={setSubmit} />}
    </div>
  );
}

export default App;
