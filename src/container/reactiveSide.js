import {connect} from 'react-redux'
import {visitCity, importCities} from '../actions'
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
  visitCity: city => dispatch(visitCity(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);