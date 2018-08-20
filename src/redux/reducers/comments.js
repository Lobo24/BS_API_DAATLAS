import * as a from '../actions/types'

const INITIAL_STATE = {
  comments: [],
  isLoaded: false,
  error: ''
}

export default function commentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.COMMENTS_GETALL_REQUEST:
      return {
        ...state
      }
    case a.COMMENTS_GETALL_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isLoaded: true
      }
    case a.COMMENTS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    case a.COMMENTS_UPDATE:
      return {
        ...state,
        comments: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
