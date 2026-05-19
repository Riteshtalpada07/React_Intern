import "./App.css";
import useCounter from "./useCounter";

function App() {

  const { count, increment, decrement } = useCounter();

  return (
    <div className="container">

      <div className="card">

        <h1>Custom Hook Counter</h1>

        <h2>Count: {count}</h2>

        <div className="btn-group">

          <button onClick={increment}>
            Increment
          </button>

          <button onClick={decrement}>
            Decrement
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;