import React from "react";
import "./MeProfile.css";
import EditMe from "./EditMe";
import { useState } from "react";

const UserProfile = ({ userInfo }) => {
  const [editProfile, setEditProfile] = useState(false);
  // console.log(userInfo);
  // console.log(userInfo.username);
  const { username, email, picture } = userInfo;
  console.log(username);
  console.log(email);
  console.log(picture);


  return (
    <section className="userContainer">
      {editProfile ? (
        <div>
          <EditMe editProfile={editProfile} setEditProfile={setEditProfile}  />
        </div>
      ) : (
        <>
          <article className="userProfile">
            <img src={picture} alt="user profile"></img>
            <div className="userInfo">
              <h2>{username}</h2>
              <h3>{email}</h3>
            </div>
          </article>
          <button onClick={() => setEditProfile(true)}>Edit Profil</button>
        </>
      )}
    </section>
  );
};

export default UserProfile;
