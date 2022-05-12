import logo from "./logo.svg";
import "./App.css";
import PromptForm from "./components/PromptForm";
function App() {
  return (
    <div style={{ maxWidth: "35%" }} className="container">
      <PromptForm />
    </div>
  );
}

export default App;
