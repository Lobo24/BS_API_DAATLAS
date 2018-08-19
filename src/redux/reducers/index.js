import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import CountriesReducer from './countries'
import CommentsReducer from './comments'

export default combineReducers({
  router: routerReducer,
  countries: CountriesReducer,
  comments: CommentsReducer
})
