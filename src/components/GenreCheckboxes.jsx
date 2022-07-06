import * as React from "react";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const GenreCheckboxes = ({ genres, handleOnChange }) => {
  console.log("genres: ", genres);
  return (
    <div>
      {" "}
      {genres.map((elem, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={index}
              name={elem.name}
              value={elem.name}
              checked={elem.checked}
              onChange={() => handleOnChange(index, elem)}
            />
            <span>{elem.name}</span>{" "}
          </li>
        );
      })}
    </div>
    // <Autocomplete
    //   multiple
    //   id="checkboxes-tags-demo"
    //   options={genres}
    //   disableCloseOnSelect
    //   getOptionLabel={(option) => option.name}
    //   onChange={() => handleOnChange()}
    //   renderOption={(genres, option, { selected }) => (
    //     <li {...genres}>
    //       <Checkbox
    //         icon={icon}
    //         checkedIcon={checkedIcon}
    //         style={{ marginRight: 8 }}
    //         checked={selected}
    //       />
    //       {option}
    //     </li>
    //   )}
    //   style={{ width: 500 }}
    //   renderInput={(params) => (
    //     <TextField
    //       {...params}
    //       label="Select by genres"
    //       placeholder="Favorites"
    //     />
    //   )}
    // />
  );
};

export default GenreCheckboxes;
