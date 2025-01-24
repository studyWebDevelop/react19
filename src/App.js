import "./App.css";
import Action from "./19hooks/Action";
import UseActionState from "./19hooks/useActionState";
import UseOptimistic from "./19hooks/useOptimistic";

function App() {
  return (
    <div className="App">
      {/* <Action /> */}
      {/* <UseActionState /> */}
      <UseOptimistic />
    </div>
  );
}

export default App;
