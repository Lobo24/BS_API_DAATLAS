import * as a from '../../actions/types'

const INITIAL_STATE = {
  countries: [],
  isLoading: false,
  error: ''
}

function countriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.COUNTRIES_GETALL_REQUEST:
      console.log('get all....')
      return true

    case a.COUNTRIES_GETALL_SUCCESS:
      console.log('get all success....')
      return true

    case a.COUNTRIES_GETALL_FAILURE:
      console.log('get all fail....')
      return true

    default:
      return state
  }
}

export default countriesReducer