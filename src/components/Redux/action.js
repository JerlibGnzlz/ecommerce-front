import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const SELECT_GENRES = "SELECT_GENRES";

export const getProduct =
  ({
    id = undefined,
    price = undefined,
    categoryId = undefined,
    brandId = undefined,
    genre = undefined,
    search = "",
  }) =>
  async (dispatch) => {
    console.log(search);
    const product = await axios.get("http://localhost:3001/product", {
      params: {
        id: id,
        price: price,
        category: categoryId,
        brand: brandId,
        genre: genre,
        search: search,
      },
    });

    return dispatch({ type: GET_PRODUCT, payload: product.data });
  };

export const selectGenero = (genre) => (dispatch) => {
  return dispatch({
    type: SELECT_GENRES,
    payload: genre,
  });
};
