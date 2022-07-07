import "./Carrousel.css";

import SeriesCard from "./SeriesCard";
import { ArrowLeft, ArrowRight } from "./Icon";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/settings.context";

const Carrousel = ({ title, series, covers, week, type }) => {
  const { isDarkMode } = useContext(SettingsContext);
  const [isActive, setActive] = useState(false);

  let listAllSeries = [];

  if (type === "latest") {
    const filterWeek = series.filter((elem) => elem.releaseDate < week);

    listAllSeries = filterWeek.map((elem) => {
      let image = elem.cover;

      image.includes("sevenseas")
        ? (image =
            "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
        : (image = elem.cover);
      return (
        <SeriesCard
          key={elem.series._id}
          name={elem.series.name}
          image={image}
          id={elem.series._id}
        />
      );
    });
  } else {
    listAllSeries = series.map((elem, i) => {
      let image = covers[i];

      image.includes("sevenseas")
        ? (image =
            "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
        : (image = covers[i]);
      return (
        <SeriesCard
          key={elem._id}
          name={elem.name}
          image={image}
          id={elem._id}
        />
      );
    });
  }

  const handleToggle = () => {
    setActive(!isActive);
  };

  /////if type === discovery
  //shuffle 10
  // + isActive ? `moving` : null} key={title}
  return (
    <section className="carrousel">
      <h2>{title}</h2>
      <hr className="divider" />
      <div className="container">
        <button onClick={() => {}}>
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
