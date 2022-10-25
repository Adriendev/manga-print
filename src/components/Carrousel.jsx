import "./Carrousel.css";

import SeriesCard from "./SeriesCard";
import { ArrowLeft, ArrowRight } from "./Icon";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/settings.context";
import { useEffect } from "react";

let listAllSeries = [];

const Carrousel = ({
  title,
  series,
  covers,
  week,
  prevMonth,
  type,
  date,
  show,
}) => {
  const { isDarkMode } = useContext(SettingsContext);
  const [isActive, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);

  if (type === "latest") {
    const today = new Date(date.setDate(date.getDate())).toISOString();
    // console.log(today);
    // console.log(prevMonth);
    const filterWeek = series.filter(
      (elem) =>
        elem.releaseDate < week &&
        elem.cover.includes("kodansha") &&
        elem.releaseDate > prevMonth
    );

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
    const filterSeries = series.filter((elem) => elem.publisher === "KODANSHA");
    listAllSeries = filterSeries.map((elem, i) => {
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

  useEffect(() => {
    setLength(listAllSeries.length);
  }, [listAllSeries]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  /////if type === discovery
  //shuffle 10
  // + isActive ? `moving` : null} key={title}
  return (
    <section className="carrousel">
      <h2>{title}</h2>
      <hr className="divider" />
      <div className="container">
        <button className="left-arrow" onClick={prev}>
          <ArrowLeft className="arrow" mode={isDarkMode ? "dark" : "light"} />
        </button>

        <div
          className={`cards show-${show}`}
          style={{ transform: `translateX(-${(currentIndex * 100) / show}%)` }}
        >
          {listAllSeries}
        </div>
        <button className="right-arrow" onClick={next}>
          <ArrowRight className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Carrousel;
