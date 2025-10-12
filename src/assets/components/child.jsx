import React from "react";

function Child({ children, ...props }) {
  // Child re-renders when Parent re-renders because the function prop is new
  console.log(`Children button rendering: ${children}`);

  return (
    <button {...props} 
        style={styles.button}>{children}</button>
  );
}

const styles = {
    button: {
        padding: '10px 20px',
        margin: '0 5px',
        fontSize: '1.2em',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        transition: 'background-color 0.2s'
    }
};

export default Child;

