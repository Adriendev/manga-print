import { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";

import "./Carrousel.css";
import { API_URL } from "../utils/constants";
import axios from "axios";

const Carrousel = ({ title, series, type }) => {
  const [latestImages, setLatestImages] = useState([]);
  //if type === latest
  const sortedSeries = [...series].sort((a, b) => a.name > b.name);
  const slicedSeries = sortedSeries.slice(0, 10);

  useEffect(() => {
    const getImages = async () => {
      const idArray = slicedSeries.map((elem) => elem._id);
      // console.log(idArray);
      const allPromises = await Promise.all(
        idArray.map(async (id) => {
          const { data } = await axios.get(
            `${API_URL}/mangaVolume/series/${id}`
          );

          return data[0].cover;
        })
      );
      setLatestImages(allPromises);
    };

    getImages();
  }, []);

  // console.log(latestImages[0]);

  const listAllSeries = slicedSeries.map((elem, i) => {
    let image = latestImages[i];
    image.includes("seven")
      ? (image =
          "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
      : (image = latestImages[i]);
    return <SeriesCard name={elem.name} image={image}></SeriesCard>;
  });

  /////if type === discovery
  //shuffle 10

  return (
    <section className="carrousel" key={title}>
      <h2>{title}</h2>
      <hr className="divider" />
      <div>{listAllSeries}</div>
    </section>
  );
};

export default Carrousel;
