import * as a from '../actions/types'

const INITIAL_STATE = {
  countries: [],
  isLoaded: false,
  error: ''
}

export default function countriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.COUNTRIES_GETALL_REQUEST:
      return {
        ...state
      }
    case a.COUNTRIES_GETALL_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        isLoaded: true
      }
    case a.COUNTRIES_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    default:
      return state
  }
}