import React, { useContext } from "react";
import { ButtonContext } from "../../App";

const Button = () => {
  const context = useContext(ButtonContext);
  console.log("context", context);
  return <button onClick={context.onClick}>count is {context.count}</button>;
};

export default Button;
