import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

import './SignupPage.css'

const baseURL = API_URL;

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setUsername(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "auth/signup",
      baseURL: baseURL,
      method: "post",
      data: {
        email,
        password,
        username,
      },
    })
      .then((response) => {
        // console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup">

      <form className="signup-form" onSubmit={handleSignupSubmit}>
      <h1>Sign Up</h1>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleName}
        />

        <button className="signup-button" type="submit">Sign Up</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
