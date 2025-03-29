import { useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <NavBar setData={(values) => setData(values)}  />
      <Card data={data}/>
    </>
  );
}

export default App;
