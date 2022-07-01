import React from "react";
import "./UserProfile.css";

const UserProfile = ({ userInfo }) => {
  // console.log(userInfo);
  // console.log(userInfo.username);
  const { username, email, picture } = userInfo;
  console.log(username);
  console.log(email);
  console.log(picture);

  return (
    <section className="userContainer">
      <article className="userProfile">
        <img src={picture} alt="user profile photo"></img>
        <div className="userInfo">
          <h2>{username}</h2>
          <h3>{email}</h3>
        </div>
      </article>
    </section>
  );
};

export default UserProfile;
