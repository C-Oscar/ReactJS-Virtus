import React from "react";

const Menu = (props) => {
  return (
    <div>
      <h1>Este es el menu</h1>
      {props.children}
    </div>
  );
};

export default Menu;
