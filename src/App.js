import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  return (
    <div>
      <div>
        <button  className="btn" onClick={handleDecrement}>-</button>
        <h5 className="number">Count is {count}</h5>
        <button className="btn" onClick={handleIncrement}>+</button>
      </div>
      <button  className="btn" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
   
