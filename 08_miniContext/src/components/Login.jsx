import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="usernameInput"
        id="usernameInput"
        placeholder="Enter username"
      />
      <br />
      <br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
        name="passwordInput"
        id="passwordInput"
        placeholder="Enter password"
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
