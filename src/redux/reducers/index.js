import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import CountriesReducer from './countries';
import countriesReducer from './countries';

export default combineReducers({
  router: routerReducer,
  countries: CountriesReducer
})