import {connect} from 'react-redux'
import {visitCity, importCities, centerMap} from '../actions'
import Map from '../components/map/Map'

const mapStateToProps = state => {
  console.log(state.map);
  return {
    map: state.map,
  }
};

const mapDispatchToProps = dispatch => ({
  importCities: pathToCities => dispatch(importCities(pathToCities)),
  visitCity: city => dispatch(visitCity(city)),
  centerMap: (lat, lon) => dispatch(centerMap(lat,lon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);