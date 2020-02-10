import { GET_USERS, LOADING, ERROR } from "../types/usuariosTypes";
const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, loading: false, error: null };
    case LOADING:
      return{...state, loading: true};
    case ERROR:
      return{...state, error: action.payload, loading: false};
    default:
      return state;
  }
};
