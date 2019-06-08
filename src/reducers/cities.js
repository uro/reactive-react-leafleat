import {ADD_CITY, BLACKLIST_CITIES, IMPORT_CITIES, VISIT_CITY} from "../actions";
import City from '../model/City';

const cities = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY:
      return [
        ...state,
        {
          cityDetails: action.City,
          visited: false,
          blacklisted: false,
          key: 'test'
        }
      ];
    case VISIT_CITY:
      return state.map(city => city.cityDetails.name === action.city.name ? {...city, visited: !city.visited} : city
      );
    case IMPORT_CITIES:
      const cities = action.csv.split('\n');

      const data = [];
      for (const cityIndex in cities) {
        if (parseInt(cityIndex) === 0) {
          continue;
        }

        if (parseInt(cityIndex) > 100) {
          break;
        }

        const cityDetails = cities[cityIndex].split(',');

        if (cityDetails.length < 4) {
          continue;
        }

        data.push({
          cityDetails: new City(cityDetails[0], cityDetails[5], parseFloat(cityDetails[2]), parseFloat(cityDetails[3])),
          key: cities[cityIndex],
          blacklisted: false,
          visited: false
        });
      }

      return data;
    case BLACKLIST_CITIES:
      const blacklistedCities = action.csv.split('\n');

      for (const cityIndex in blacklistedCities) {
        if (parseInt(cityIndex) === 0) {
          continue;
        }

        const cityDetails = blacklistedCities[cityIndex].split(',');

        if (cityDetails.length < 4) {
          continue;
        }

        return state.map(city => {
          if (city.key !== blacklistedCities[cityIndex]) {
            return city;
          }

          city.blacklisted = true;

          return city;
        });
      }

      return data;
    default:
      return state
  }
};

export default cities