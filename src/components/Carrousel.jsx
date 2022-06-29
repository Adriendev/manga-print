import { useState } from "react";
import SeriesCard from "./SeriesCard";

import "./Carrousel.css";

const Carrousel = ({ title, series, slice }) => {
  //   const [seriesId, setSeriesId] = useState([]);
  const slicedSeries = series.slice(0, 10);

  const listAllSeries = slicedSeries.map((elem) => (
    <SeriesCard name={elem.name}></SeriesCard>
  ));

  listAllSeries.sort();

  return (
    <section className="carrousel" key={title}>
      <h2>{title}</h2>
      <hr className="divider" />
      <div>{listAllSeries}</div>
    </section>
  );
};

export default Carrousel;
