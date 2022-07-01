import "./Carrousel.css";

import SeriesCard from "./SeriesCard";
import { ArrowLeft, ArrowRight } from "./Icon";
import { useContext } from "react";
import { SettingsContext } from "../context/settings.context";

const Carrousel = ({ title, series, seriesCovers, type }) => {
  //if type === latest
  const { isDarkMode } = useContext(SettingsContext);

  const slicedSeries = series.slice(800, 810);
  // console.log(slicedSeries);
  const slicedCovers = seriesCovers.slice(800, 810);
  // console.log(slicedCovers);

  const listAllSeries = slicedSeries.map((elem, i) => {
    let image = slicedCovers[i];

    image.includes("sevenseas")
      ? (image =
          "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
      : (image = slicedCovers[i]);
    return <SeriesCard key={elem.id} name={elem.name} image={image} />;
  });

  /////if type === discovery
  //shuffle 10

  return (
    <section className="carrousel" key={title}>
      <h2>{title}</h2>
      <hr className="divider" />
      <div className="container">
        <button>
          <ArrowLeft className="arrow" mode={isDarkMode ? "dark" : "light"} />
        </button>

        <div className="cards">{listAllSeries}</div>
        <button>
          <ArrowRight className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Carrousel;
