import React from 'react';

import './citiesList.css';

const CitiesList = ({cities, visitCity}) => {
  function getStyles(visited, blacklisted) {
    if (visited === true) {
      return "citiesListElement visited";
    }

    if (blacklisted === true) {
      return "citiesListElement blacklisted";
    }

    return "citiesListElement";
  }

  return (
    <div className="citiesList">
      {cities.map((city) =>
        <div
          className={getStyles(city.visited, city.blacklisted)}
          key={city.cityDetails.name + city.cityDetails.country + city.cityDetails.lat}
          onClick={() => visitCity(city.cityDetails)}
        >
          {city.cityDetails.name}, {city.cityDetails.country}
          <div className="citiesListElementCoordinates">
            lat: {city.cityDetails.lat}, lon: {city.cityDetails.lon}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesList;