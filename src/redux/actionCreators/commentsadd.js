import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/allComments/'

export default function addComment(comment) {
  console.log(comment)
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.COMMENTS_GETALL_REQUEST
    })

    try {
      // Call the API
      await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))
      const response = await fetch(API_URL)

      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.COMMENTS_UPDATE,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.COMMENTS_GETALL_FAILURE,
        error: err
      })
    }
  }
}
