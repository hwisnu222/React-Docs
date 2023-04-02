import { useReducer } from "react";
import "./App.css";

const constant = {
  INCREASE_COUNT: "INCREASE_COUNT",
  DECREASE_COUNT: "DECREASE_COUNT",
  SET_NAME: "SET_NAME",
};

const initialState = {
  count: 0,
  name: "Initial name",
};

const reducer = (state, action) => {
  switch (action.type) {
    case constant.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case constant.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case constant.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({ type: constant.INCREASE_COUNT });
  };

  const decrease = () => {
    dispatch({ type: constant.DECREASE_COUNT });
  };

  const changeName = () => {
    dispatch({ type: constant.SET_NAME, payload: "hello" });
  };

  return (
    <div className="App">
      <p>{state.name}</p>
      <p>{state.count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
