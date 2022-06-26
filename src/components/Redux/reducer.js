import {GET_PRODUCT, SELECT_GENRES, GET_CATEGORIES,GET_BRAND} from "./action";

const initialState = {
    products:[],
    genres:"",
    categories:[],
    brand:[]
 
  
}


function rootReducer(state= initialState, action){

    
    switch(action.type){
        case GET_PRODUCT:{

       return {
         ...state,
         products: action.payload


       }
    }

    case SELECT_GENRES:{

        
        return{
            ...state,
            genres: action.payload

        }

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
   ;





export default rootReducer;