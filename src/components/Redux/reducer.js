
export default rootReducer;

import {
  GET_PRODUCT,
  GET_CATEGORIES,GET_BRAND,
  GET_PRODUCT_DETAIL,
  RESET,
} from "./action";

const initialState = {
  products: [],
  genres: "",
  detail: [],
  categories:[],
   brand:[]
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }

    case RESET:
      return {
        ...state,
        detail: [],
      };

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
        case  GET_CATEGORIES:{
        return{
            ...state,
            categories:action.payload
        }
    }
    
    case  GET_BRAND:{
        return{
            ...state,
            brand:action.payload
        }
    }

    default:
      return state;
  }
}

export default rootReducer;

