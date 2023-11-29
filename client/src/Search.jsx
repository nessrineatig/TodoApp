import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div>
      <select
        name="search"
        id="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      >
        <option value="cat">cat</option>
        <option value="dog" >
          dog
        </option>
      </select>

      <button onClick={() => handleSearch(query)} id="searching">
        Search
      </button>
    </div>
  );
};

export default Search;
