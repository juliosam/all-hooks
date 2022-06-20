import UseEffect from "./components/useEffect";
import UseReducer from "./components/useReducer";
import UseState from "./components/useState";
import UseRef from "./components/useRef";
import UseImperative from "./components/useImperative";
import UseContext from "./components/useContext";
import UseMemo from "./components/useMemo";

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseReducer/>
      <UseEffect/>
      <UseRef/>
      <UseImperative/>
      <UseContext/>
      <UseMemo/>
    </div>
  );
}

export default App;
