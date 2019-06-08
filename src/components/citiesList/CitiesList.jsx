import React from 'react';

import './citiesList.css';

const CitiesList = ({cities, visitCity}) => {
  function getStyles(visited) {
    if (visited === true) {
      return "citiesListElement visited";
    }
    return "citiesListElement";
  }

  return (
    <div className="citiesList">
      {cities.map((city) =>
        <div
          className={getStyles(city.visited)}
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