import { GET_PRODUCT, SELECT_GENRES } from "./action";

const initialState = {
  products: [],
  genres: "",
};

function rootReducer(state = initialState, action) {
  console.log(action.payload, "payload");

  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case SELECT_GENRES: {
      return {
        ...state,
        genres: action.payload,
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
