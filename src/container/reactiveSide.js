import {connect} from 'react-redux'
import {visitCity, importCities, blacklistCities} from '../actions'
import Side from '../components/side/Side'

const getCities = (cities) => {
  return cities;
};

const mapStateToProps = state => {
  return {
    cities: getCities(state.cities)
  }
};

const mapDispatchToProps = dispatch => ({
  importCities: pathToCities => dispatch(importCities(pathToCities)),
  blacklistCities: pathToCities => dispatch(blacklistCities(pathToCities)),
  visitCity: city => dispatch(visitCity(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);