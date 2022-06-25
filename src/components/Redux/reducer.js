
import { GET_PRODUCT, SELECT_GENRES, GET_PRODUCT_DETAIL, RESET } from "./action";

const initialState = {
  products: [],
  genres: "",
  detail: [],
};

function rootReducer(state = initialState, action) {
  console.log(action.payload, "payload");

  switch (action.type) {

    case GET_PRODUCT_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }

    case RESET:
        return{
          ...state,
          detail: []
        }

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
