import React from "react";

const LoadingUI = ({ users }) => {
  return (
    <>
      <h1>userlist</h1>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </>
  );
};

export default LoadingUI;
