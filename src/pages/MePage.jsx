import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import UserProfile from "../components/MeProfile";
import LoadingDisplay from "../components/LoadingDisplay";
import { Navigate } from "react-router-dom";
import UserReviewsContainer from "../components/UserReviewsContainer";
import { ReviewsContext } from "../context/reviews.context";
import UserFavoritesContainer from "../components/UserFavoritesContainer";
import { FavoritesContext } from "../context/favorites.context";
import "./MePage.css";

const baseUrl = API_URL;

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState("");
  const { getToken, isLoggedIn, user, authenticateUser } =
    useContext(AuthContext);
  const { reviews } = useContext(ReviewsContext);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const token = getToken();
    let config = {
      method: "get",
      url: `${baseUrl}/user/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!isLoggedIn) {
      return setIsLoading(true);
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
      <UserProfile userInfo={userInfo} />
      <hr />
      <section className="reviews-favorites">
        <div className="reviews">
          <h2>Your reviews</h2>
          <UserReviewsContainer reviews={reviews} />
        </div>
        <div className="favorites">
          <h2>Your favorites</h2>
          <UserFavoritesContainer favorites={favorites} />
        </div>
      </section>
    </main>
  );
};

export default UserPage;
