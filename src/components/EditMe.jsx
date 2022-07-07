import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";

import "./EditMe.css";

const baseUrl = API_URL;

const EditMe = ({ editProfile, setEditProfile }) => {
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { removeToken, storeToken, getToken, authenticateUser } =
    useContext(AuthContext);

  // dans le patch, ajouter le fait de créer un token et l'envoyer
  // comme c'est fait dans /login, mais uniquement si tu as reçu un username dans le req.body

  // transformer handleEditMe en async/await

  // axios patch truc truc
  // SI on reçoit un nouveau token du back, faire tout ce qui suit:
  // unee fois qu'on a reçu le nouveau token, importer la fonction removeToken du authcontext et l'appeler
  // puis faire storeToken avec le nouveau token reçu
  //  et authenticateUser (qui viennent du authcontext)

  const handleEditMe = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("picture", picture);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("username", username);
    const token = getToken();
    const response = await axios({
      url: `${baseUrl}/user/me`,
      method: "patch",
      data: fd,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (username) {
      const newToken = response.data.authToken;
      await removeToken();
      await storeToken(newToken);
      await authenticateUser();
    } else {
      authenticateUser();
    }
  };

  return (
    <div className="edit">
      <form className="edit-form" onSubmit={handleEditMe}>
        <h1>Edit profile</h1>
        <label>Upload an image:</label>
        <input
          type="file"
          name="picture"
          files={picture}
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="edit-button" type="submit">
          Edit
        </button>
      </form>
      <button className="edit-button" onClick={() => setEditProfile(false)}>
        Return to Profile
      </button>
    </div>
  );
};

export default EditMe;
