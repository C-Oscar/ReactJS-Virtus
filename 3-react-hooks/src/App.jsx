import { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Menu from "./components/Menu";
import batman from "./assets/batman.jpeg";

export const ButtonContext = createContext({});

function App() {
  const [count, setCount] = useState(0);
  const [isDismount, setIsDismount] = useState(false);

  useEffect(() => {
    console.log("actualization");
  });

  useEffect(() => {
    console.log("mouting component");
    // setTimeout(() => {
    //   setIsDismount(true);
    // }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      console.log("dismount");
    };
  }, []);

  return (
    <>
      {isDismount ? (
        <p>component dismount</p>
      ) : (
        <div className="App">
          <div className="card">
            <ButtonContext.Provider
              value={{ onClick: () => setCount(count + 1), count: count }}
            >
              <Menu />
            </ButtonContext.Provider>
          </div>
        </div>
      )}
      <img src={batman} alt="imagen de batman" />
    </>
  );
}

export default App;
