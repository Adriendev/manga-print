import React, { useContext } from "react";
import "./MeProfile.css";
import EditMe from "./EditMe";
import { useState } from "react";
import NsfwSwitch from "./NsfwSwitch";
import { AuthContext } from "../context/auth.context";
import { SettingsContext } from "../context/settings.context";
import i18n from "../utils/dictionnary";

const UserProfile = ({ userInfo }) => {
  const [editProfile, setEditProfile] = useState(false);
  const { username, email, picture } = userInfo;

  const { user } = useContext(AuthContext);
  const { lang } = useContext(SettingsContext);

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
            <h2 className={username === user ? "" : "big-title"}>{username}</h2>
            <h3>{email}</h3>
            {username === user && (
              <>
                <button
                  className="user-button"
                  onClick={() => setEditProfile(true)}
                >
                  {i18n[lang].editProfile}
                </button>
                <div className="nsfw-button">
                  <NsfwSwitch />
                  <p>{i18n[lang].seeNsfw}</p>
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
