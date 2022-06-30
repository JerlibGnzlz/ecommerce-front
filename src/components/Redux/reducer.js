
import {
  GET_PRODUCT,
  GET_CATEGORIES,GET_BRAND,
  GET_PRODUCT_DETAIL,
  RESET,
  DELETE_CART,
} from "./action";

const initialState = {
  products: [],
  detail: [],
  categories:[],
   brand:[],
  cart:[],
  
  
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
    case  DELETE_CART:{
      return{
          ...state,
          cart:action.payload
      }
  }




    default:
      return state;
  }
}

export default rootReducer;

