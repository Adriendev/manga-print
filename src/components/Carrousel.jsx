import "./Carrousel.css";

import SeriesCard from "./SeriesCard";
import { ArrowLeft, ArrowRight } from "./Icon";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/settings.context";

const Carrousel = ({ title, series, seriesCovers, type }) => {
  const { isDarkMode } = useContext(SettingsContext);
  const [isActive, setActive] = useState(false);

  console.log(isActive);

  //if type === latest
  const handleToggle = () => {
    console.log("click");
    setActive(!isActive);
  };

  const slicedSeries = series.slice(800, 820);
  // console.log(slicedSeries);
  const slicedCovers = seriesCovers.slice(800, 820);
  // console.log(slicedCovers);

  const listAllSeries = slicedSeries.map((elem, i) => {
    let image = slicedCovers[i];

    image.includes("sevenseas")
      ? (image =
          "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
      : (image = slicedCovers[i]);
    return (
      <SeriesCard key={elem.id} name={elem.name} image={image} id={elem._id} />
    );
  });

  /////if type === discovery
  //shuffle 10
  // + isActive ? `moving` : null} key={title}
  return (
    <section className="carrousel">
      <h2>{title}</h2>
      <hr className="divider" />
      <div className="container">
        <button
          onClick={() => {
            console.log(`clicked!`);
          }}
        >
          <ArrowLeft className="arrow" mode={isDarkMode ? "dark" : "light"} />
        </button>

        <div className={`cards ` + (isActive ? "moving-left" : null)}>
          {listAllSeries}
        </div>
        <button onClick={handleToggle}>
          <ArrowRight className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Carrousel;
