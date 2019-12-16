import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_ISLOADING,
} from '../types.js'

export default (state, action) => {
  const { type, payload } = action; 
  switch (type) {
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: payload,
        isLoading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        isLoading: false
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        isLoading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        isLoading: false
      };
    default:
      return state;
  }
}
