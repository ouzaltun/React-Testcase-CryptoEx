import { useState } from "react";
import "./App.css";
import CoinList from "./components/CoinList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CoinList></CoinList>
    </>
  );
}

export default App;
