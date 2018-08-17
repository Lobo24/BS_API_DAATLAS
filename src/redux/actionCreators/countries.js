import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/countries'

export default function getAllCountries() {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.COUNTRIES_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL)
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.COUNTRIES_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.COUNTRIES_GETALL_FAILURE,
        error: err
      })
    }
  }
}