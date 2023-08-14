import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoOptions, GEO_API_URL } from "../Api";

const Search = ({ SearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputvalue) => {
    fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,
      GeoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handlechange = (searchData) => {
    setSearch(searchData);
    SearchChange(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handlechange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
