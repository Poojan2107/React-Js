import React, { useRef } from "react";

const App = () => {
  const username = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value);
  };

  const formStyle = {
    width: "300px",
    display: "flex",
    padding: "20px",
    border: "1px solid black",
    flexDirection: "column",
    borderRadius: "10px",
    gap: "10px",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" ref={username} placeholder="Enter Username..." />

      <button onClick={() => username.current.focus()} type="submit">
        Submit
      </button>
    </form>
  );
};

export default App;
