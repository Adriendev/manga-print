import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";

const baseUrl = API_URL;

const EditMe = ({ editProfile, setEditProfile }) => {
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { getToken } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setUsername(e.target.value);
  const handlePicture = (e) => setPicture(e.target.value);

  const handleEditMe = (e) => {
    e.preventDefault();
    const token = getToken();
    axios({
      url: `${baseUrl}/user/me`,
      method: "patch",
      data: {
        picture,
        username,
        password,
        email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      EditMe
      <form onSubmit={handleEditMe}>
        <label>Picture</label>
        <input
          type="url"
          name="picture"
          value={picture}
          onChange={handlePicture}
        />

        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleName}
        />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Edit</button>
      </form>
      <button onClick={() => setEditProfile(false)}>Go back little shit</button>
    </div>
  );
};

export default EditMe;
