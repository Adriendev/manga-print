import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const GenreCheckboxes = ({ genres, handleOnChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckbox = async (e) => {
    e.preventDefault();
    const checkedGenres = genres.filter((x) => x.checked);
    console.log(checkedGenres);
    const genreName = checkedGenres.map((genre) => {
      return genre.name;
    });
    console.log("SEARCH PARAMS", searchParams);

    const params = Object.fromEntries(searchParams.entries());
    // if genres have changed, we should reset to page 1
    setSearchParams({ ...params, genres: genreName, page: 1 });
  };
  return (
    <>
      <form className="checkboxe-genres" onSubmit={handleCheckbox}>
      <h2>Filter By Genre:</h2>
        {genres.map((elem, index) => {
          return (
            <div className="genre-check">
              <li key={index}>
                <input
                  className="check-genre"
                  type="checkbox"
                  id={index}
                  name={elem.name}
                  value={elem.name}
                  checked={elem.checked}
                  onChange={() => handleOnChange(index, elem)}
                />
                <span className="span-genre">{elem.name}</span>{" "}
              </li>
            </div>
          );
        })}
        <button className="checkbox-button" type="submit">
          Apply filters
        </button>
      </form>
    </>
  );
};

export default GenreCheckboxes;
