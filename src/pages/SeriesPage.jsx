import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const SeriesPage = () => {
  const { isLoading } = useContext(AuthContext);
  return (
    <div>
      <h2>{isLoading ? <p>Retrieving data...</p> : <p>SeriesPage</p>}</h2>
    </div>
  );
};

export default SeriesPage;
