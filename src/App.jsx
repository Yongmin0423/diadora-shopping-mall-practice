import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./reset.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Nav />
      <Outlet context={{ authenticate, setAuthenticate }} />
    </>
  );
}

export default App;
