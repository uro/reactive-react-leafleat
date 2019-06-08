import {CENTER_MAP, VISIT_CITY} from "../actions";
import City from "../model/City";

const defaultState = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
  currentCity: new City("London", "UK", 51.505, -0.09),
  visitedCities: []
};

const map = (state = defaultState, action) => {
  switch (action.type) {
    case CENTER_MAP:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lon,
      });

    case VISIT_CITY:
      return Object.assign({}, state, {
        lat: action.city.lat,
        lng: action.city.lon,
        currentCity: action.city,
        visitedCities: [...state.visitedCities, [action.city.lat, action.city.lon]]
      });
    default:
      return state
  }
};

export default map;