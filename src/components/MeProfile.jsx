import React from "react";
import "./MeProfile.css";
import EditMe from "./EditMe";
import { useState } from "react";
import NsfwSwitch from "./NsfwSwitch";

const UserProfile = ({ userInfo }) => {
  const [editProfile, setEditProfile] = useState(false);
  // console.log(userInfo);
  // console.log(userInfo.username);
  const { username, email, picture } = userInfo;
  // console.log(username);
  // console.log(email);
  // console.log(picture);

  return (
    <section className="userContainer">
      {editProfile ? (
        <div>
          <EditMe editProfile={editProfile} setEditProfile={setEditProfile} />
        </div>
      ) : (
        <article className="user-profile-container">
          <img src={picture} alt="user profile"></img>
          <div className="userInfo">
            <h2>{username}</h2>
            <h3>{email}</h3>
            <button
              className="user-button"
              onClick={() => setEditProfile(true)}
            >
              Edit Profile
            </button>
            <div className="nsfw-button">
              <NsfwSwitch />
              <p>I want to see NSFW content</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default UserProfile;
