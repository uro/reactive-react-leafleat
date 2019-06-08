export const ADD_CITY = 'ADD_CITY';
export const VISIT_CITY = 'VISIT_CITY';
export const IMPORT_CITIES = 'IMPORT_CITIES';
export const BLACKLIST_CITIES = 'BLACKLIST_CITIES';

export const CENTER_MAP = 'CENTER_MAP';
export const TOGGLE_SIMULATION = 'TOGGLE_SIMULATION';
export const STOP_SIMULATION = 'STOP_SIMULATION';
export const START_SIMULATION = 'START_SIMULATION';

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

export const blacklistCities = csv => ({
  type: BLACKLIST_CITIES,
  csv
});

export const centerMap = (lat, lon) => ({
  type: CENTER_MAP,
  lat,
  lon
});

export const toggleSimulation = () => ({
  type: TOGGLE_SIMULATION,
});


export const stopSimulation = () => ({
  type: STOP_SIMULATION,
});

export const startSimulation = () => ({
  type: START_SIMULATION,
});