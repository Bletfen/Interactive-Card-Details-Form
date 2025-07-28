import "./App.css";
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";
import SubmitText from "./components/SubmitText";
function App() {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[34.9rem]">
      <Cards />
      <CardForm />
    </div>
  );
}

export default App;
