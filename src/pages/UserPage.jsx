import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import UserProfile from "../components/MeProfile";
import LoadingDisplay from "../components/LoadingDisplay";
import { Navigate, useParams } from "react-router-dom";
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
  const [userFavorites, setUserFavorites] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    let config = {
      method: "get",
      url: `${baseUrl}/user/profile/${userId}`,
    };
    setIsLoading(true);

    axios(config).then((response) => {
      setUserInfo(response.data);

      const newFavorites = response.data.favorites.map((favorite, i) => {
        favorite.seriesPicture = response.data.favCovers[i];
        return favorite;
      });
      const newReviews = response.data.reviews.map((review, i) => {
        review.seriesPicture = response.data.revCovers[i];
        return review;
      });
      setUserFavorites(newFavorites);
      setUserReviews(newReviews);
      setIsLoading(false);
    });
  }, []);

  //   console.log(userInfo);

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
          <h2>{`${userInfo.username}'s reviews`}</h2>
          <UserReviewsContainer reviews={userReviews} />
        </div>
        <div className="favorites">
          <h2>{`${userInfo.username}'s favorites`}</h2>
          <UserFavoritesContainer favorites={userFavorites} />
        </div>
      </section>
    </main>
  );
};

export default UserPage;
