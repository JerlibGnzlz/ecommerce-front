

import axios from "axios"
export const GET_PRODUCT = "GET_PRODUCT";
export const SELECT_GENRES = "SELECT_GENRES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND= "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";




export const getProduct = ({id = undefined, price = undefined, categoryId = undefined, brandId = undefined, genre = undefined,search=""} ) => async dispatch => {

  const product = await axios.get("http://localhost:3001/product",{ 
                                                                  params:{
                                                                  id: id,
                                                                  price: price,
                                                                  category: categoryId,
                                                                  brand: brandId,
                                                                  genre:genre,
                                                                search:search}
});

  return dispatch({type: GET_PRODUCT, payload: product.data})}

  export const selectGenero =({genre})=> dispatch=>{

    return dispatch({
      type: SELECT_GENRES,
      payload: genre
    })

  }

  export const getCategories=({genre=undefined, brand=undefined})=> async dispatch=>{
    const categories= await axios.get("http://localhost:3001/categories",
    {
      params:{
        genre:genre,
        brand:brand
      }
    })
    console.log(genre, "genre")
   
      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data
      })
    
  }

  export const getBrand=({genre=undefined, category=undefined})=> async dispatch=>{
    const brand= await axios.get("http://localhost:3001/brands",
    {
      params:{
        genre:genre,
        category:category
      }
    })
    
      return dispatch({
        type: GET_BRAND,
        payload: brand.data
      })
    
  }



export const getProductDetail = (id) => async (dispatch) => {
  const product = await axios.get("http://localhost:3001/product", {
    params: {
      id: id,
    },
  });

  return dispatch({ type: GET_PRODUCT_DETAIL, payload: product.data });
};

export const reset = () => {
  return (dispatch) => {
    dispatch({ type: RESET });
  };
};



