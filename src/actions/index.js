export const ADD_CITY = 'ADD_CITY';
export const VISIT_CITY = 'VISIT_CITY';
export const IMPORT_CITIES = 'IMPORT_CITIES';

export const CENTER_MAP = 'CENTER_MAP';

export const addCity = City => ({
  type: ADD_CITY,
  City
});

export const visitCity = city => ({
  type: VISIT_CITY,
  city
});

export const importCities = csv => ({
  type: IMPORT_CITIES,
  csv
});

export const centerMap = (lat, lon) => ({
  type: CENTER_MAP,
  lat,
  lon
});