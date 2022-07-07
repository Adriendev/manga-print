import React, { useContext } from "react";
import "./MeProfile.css";
import EditMe from "./EditMe";
import { useState } from "react";
import NsfwSwitch from "./NsfwSwitch";
import { AuthContext } from "../context/auth.context";

const UserProfile = ({ userInfo }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { username, email, picture } = userInfo;
  const { user } = useContext(AuthContext);

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
            {username === user && (
              <>
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
              </>
            )}
          </div>
        </article>
      )}
    </section>
  );
};

export default UserProfile;
