import React, { useContext } from "react";

const CountContext = React.createContext();

const CountComponent = () => {
  const [state, dispatch] = useContext(CountContext);

  const increment = () => {
    dispatch((prev) => prev + 1);
  };
  return (
    <>
      <p>{state}</p>
      <button onClick={increment}>Increament</button>
    </>
  );
};

function App() {
  const [state, setState] = React.useState(0);

  return (
    <CountContext.Provider value={[state, setState]}>
      <CountComponent />
    </CountContext.Provider>
  );
}

export default App;
