import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND = "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";
export const TOP_SELLERS = "TOP_SELLERS";
export const MERCADO_PAGO = "MERCADO_PAGO";


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

export const getCategories =
  ({ genre = undefined, brand = undefined }) =>
  async (dispatch) => {
    const categories = await axios.get("http://localhost:3001/categories", {
      params: {
        genre: genre,
        brand: brand,
      },
    });

    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  };

export const getBrand =
  ({ genre = undefined, category = undefined }) =>
  async (dispatch) => {
    const brand = await axios.get("http://localhost:3001/brands", {
      params: {
        genre: genre,
        category: category,
      },
    });

    return dispatch({
      type: GET_BRAND,
      payload: brand.data,
    });
  };

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

export function topSeller() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/orderItem");

    return dispatch({
      type: TOP_SELLERS,
      payload: json.data,
    });
  };
}

export const postMercadoPago = (data) => {
  console.log(data, 'action')
  
  return async function (dispatch) {
    return axios
    .post("http://localhost:3001/mp/payment", data)
    .then((response) => {
      dispatch({ type: MERCADO_PAGO, payload: response.data });
    })
    .catch((err) => console.error(err));
  };
};


