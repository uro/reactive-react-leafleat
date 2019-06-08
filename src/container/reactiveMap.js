import {connect} from 'react-redux'
import {visitCity, importCities, centerMap, toggleSimulation, stopSimulation, startSimulation} from '../actions'
import Map from '../components/map/Map'

const getNotVisitedCities = (cities) => cities.filter(city => city.visited === false && city.blacklisted === false);

const mapStateToProps = state => {
  console.log(state.map);
  return {
    map: state.map,
    cities: state.cities,
    notVisitedCities: getNotVisitedCities(state.cities),
    simulationState: state.map.simulationState,
    simulationStarted: state.map.simulationStarted
  }
};

const mapDispatchToProps = dispatch => ({
  importCities: pathToCities => dispatch(importCities(pathToCities)),
  visitCity: city => dispatch(visitCity(city)),
  centerMap: (lat, lon) => dispatch(centerMap(lat, lon)),
  toggleSimulation: () => {
    dispatch(toggleSimulation())
  },
  stopSimulation: () => {
    dispatch(stopSimulation())
  },
  startSimulation: () => {
    dispatch(startSimulation())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);