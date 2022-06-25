import { GET_PRODUCT_DETAIL } from "./action";

const initialState = {
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

    default:
      return state;
  }
}
export default rootReducer;
