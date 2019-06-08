export const findClosestCity = (currentCity, notVisitedCities) => {
  let min = undefined;
  let closestCity = undefined;
  notVisitedCities.forEach(city => {
    const cityDetails = city.cityDetails;
    if (min === undefined) {
      min = calculateDistance(currentCity, cityDetails);
      closestCity = cityDetails;
    } else {
      const minDistance = calculateDistance(currentCity, cityDetails);
      if (min > minDistance) {
        min = minDistance;
        closestCity = cityDetails;
      }
    }
  });

  return closestCity;
};

export const calculateDistance = (city1, city2) => {
  const radlat1 = Math.PI * city1.lat / 180;
  const radlat2 = Math.PI * city2.lat / 180;
  const theta = city1.lon - city2.lon;
  const radtheta = Math.PI * theta / 180;

  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  if (dist > 1) {
    dist = 1;
  }

  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;

  return dist;
};