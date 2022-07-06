import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = ({ search, setSearch, seriesInfo }) => {
  console.log('seriesInfo :', seriesInfo);
  return (
    <div>
      {/* <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={seriesInfo.map((option) => option.name)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
        />
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={seriesInfo.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack> */}

      <>
        <label>Search</label>
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </>
    </div>
  );
};

export default SearchBar;
