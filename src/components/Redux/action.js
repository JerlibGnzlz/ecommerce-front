import axios from "axios";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = 'RESET'

export const getProductDetail = (id) => async (dispatch) => {
  console.log(id, "id");

  const product = await axios.get("http://localhost:3001/product", {
    params: {
      id: id,
    },
  });

  return dispatch({ type: GET_PRODUCT_DETAIL, payload: product.data });
};

export const reset=()=>{
    return (dispatch)=>{
      dispatch({type: RESET})
    }
  }