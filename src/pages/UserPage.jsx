import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import LoadingDisplay from "../components/LoadingDisplay";

const baseUrl = API_URL;

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const { getToken, isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    const token = getToken();
    let config = {
      method: "get",
      url: `${baseUrl}/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config).then((response) => {
      setIsLoading(true);
      setUserInfo(response.data);
      console.log(setUserInfo);
      setIsLoading(false);
    });
  }, [isLoggedIn, user]);

  if (isLoading) {
    return (
      <main>
        <LoadingDisplay />
      </main>
    );
  }

  return (
    <main>
    <h1>Profile page:</h1>
      <UserProfile userInfo={userInfo} />
      <button>Edit Profile</button>
      </main>
 
  );
};

export default UserPage;
