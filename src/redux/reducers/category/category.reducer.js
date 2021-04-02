import {
  GET_CATEGORY,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_CATEGORY,
} from "../../actions/types";
const INITIAL_STATE = {
  data: [],
  loading: false,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    case GET_CATEGORY:
      return { ...state, data: action.payload };

    case CREATE_CATEGORY:
      return { ...state, data: state.data.concat(action.payload) };

    case UPDATE_CATEGORY:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item._id === action.payload._id) return action.payload;
          return item;
        }),
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
};
export default categoryReducer;
