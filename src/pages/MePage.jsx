import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import UserProfile from "../components/MeProfile";
import LoadingDisplay from "../components/LoadingDisplay";
import { Navigate } from "react-router-dom";

const baseUrl = API_URL;

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const { getToken, isLoggedIn, user, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    const token = getToken();
    let config = {
      method: "get",
      url: `${baseUrl}/user/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!isLoggedIn){
      return setIsLoading(true)
    }

    axios(config).then((response) => {
      setIsLoading(true);
      setUserInfo(response.data);
      // console.log(setUserInfo);
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
      <UserProfile userInfo={userInfo}  />
    </main>
  );
};

export default UserPage;
