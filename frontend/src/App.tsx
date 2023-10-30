import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [count] = useState(100);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello {count}!</h1>
      <HomePage />
    </>
  );
}

export default App;
