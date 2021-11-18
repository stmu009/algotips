import "./App.css";
import Home from "./pages/Home";
import {StateProvider} from "./store/StateProvider"

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Home></Home>
      </StateProvider>
    </div>
  );
}

export default App;
