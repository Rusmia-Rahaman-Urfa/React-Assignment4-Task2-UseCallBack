import React, { useState, memo, useMemo, useCallback } from "react";
import Child from "./child"; 

const MemorizedButton = memo(Child);

const Parent = () => { 
  const [count, setCount] = useState(0);
  console.log("Rendering Parent Component");

  //  Re-render (without use callback)
  /*const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }; n 
  const handleDecrement = () => {r
    setCount((prev) => prev - 1);
  }; */

    //  (use callback)
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }); 
  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  });

  const isEven = useMemo(() => {
     let i = 0;
     while (i < 100000000) { i++; }
    return count % 2 === 0;
  }, [count]);

  return (
    <div style={styles.parentContainer}>
      <h2 style={styles.title}>Counter: {count}</h2>
      <p style={{ color: isEven ? 'green' : 'red' }}>
        {isEven ? "Even" : "Odd"}
      </p>

      {/* Pass the changing function references to the memoized Child */}
      <MemorizedButton onClick={handleIncrement}>+</MemorizedButton>
      <MemorizedButton onClick={handleDecrement}>-</MemorizedButton>
    </div>
  );
};

const styles = {
    parentContainer: {
        border: '2px solid #5a5a5a',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: '2em',
        marginBottom: '5px'
    }
};

export default Parent;