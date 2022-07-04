import React from "react";
import SeriesCard from "./SeriesCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const SeriesList = ({ seriesInfo, seriesCover }) => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);

  let allSeries = [];

  allSeries = seriesInfo.map((elem, i) => {
    let image = seriesCover[i];
    image.includes("sevenseas")
      ? (image =
          "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
      : (image = seriesCover[i]);

    return {
      image: image,
      name: elem.name,
      id: elem._id,
    };
  });

  console.log("allTest: ", allSeries);

  const [display, setDisplay] = useState(allSeries);

  const seriesToDisplay = allSeries.filter((series) => {
    return series.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.targetValue));
    }
    setChecked(updatedList);
  };

  const checkList = seriesInfo.map((elem) => {
    return (
      <div>
        <input value={elem.genre} type="checkbox" onChange={handleCheck} />
        <span>{elem.genre}</span>
      </div>
    );
  });

  return (
    <>
      {" "}
      <div className="search-bar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="checkList">{checkList}</div>
      {seriesToDisplay.map((elem) => {
        return (
          <li key={elem._id}>
            <SeriesCard
              key={elem._id}
              name={elem.name}
              image={elem.image}
              id={elem._id}
            />
          </li>
        );
      })}
    </>
  );
};

export default SeriesList;
