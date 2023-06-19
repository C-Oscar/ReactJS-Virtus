import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Menu from "./components/Menu";

function App() {
  const [button, useButton] = useState(0);

  const onClick = () => {
    console.log("fue oprimido");
    useButton(button + 1);
    console.log(button);
  };

  return (
    <div>
      {/* <Button onClick={onClick} buttonText="oprimeme"></Button>
      <p>Fue oprimido {button} veces </p> */}
      <Menu>
        <Button onClick={onClick} buttonText="Productos"></Button>
        <Button onClick={onClick} buttonText="Contacto"></Button>
      </Menu>
    </div>
  );
}

export default App;
