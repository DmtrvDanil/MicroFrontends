import "./App.css";
import { Input, List } from "./components";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input value={count} onChange={setCount} onSubmit={console.log} />
      <List items={["Learn React", "Learn Vite", "Make an awesome app"]} />
    </>
  );
}

export default App;