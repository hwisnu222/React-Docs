import { useState } from "react";
import "./App.css";

// example Higher Order Component
const withCount = (Component) => (props) => {
  const [count, setCount] = useState(0);
  /**
   * you can pass data on this component
   * then, all component use this HOC have the same props
   */
  return <Component {...props} count={count} setCount={setCount} />;
};

function App({ count, setCount }) {
  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default withCount(App);
