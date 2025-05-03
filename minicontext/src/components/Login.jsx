import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext.js";
//send data to context api to store it and use it as global variable
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); //store data from this form or input data

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h3>Login Form</h3>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
