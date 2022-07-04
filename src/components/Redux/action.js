import {
  URL_GET_BRAND,
  URL_GET_CATEGORIES,
  URL_GET_PRODUCT,
  URL_MERCADO_PAGO,
  URL_TOP_SELLERS,
  URL_GET_PRODUCT_DETAIL,
} from "../constant";
import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND = "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";
export const TOP_SELLERS = "TOP_SELLERS";

export const MERCADO_PAGO = "MERCADO_PAGO";
export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_CART = "RESET_CART";
export const ADD_TO_CART_DETAIL = "ADD_TO_CART_DETAIL";

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
    const product = await axios.get(
      "https://free-style-store.herokuapp.com/product",
      {
        params: {
          id: id,
          price: price,
          category: categoryId,
          brand: brandId,
          genre: genre,
          search: search,
        },
      }
    );

    // console.log(categoryId,brandId,'esto es el categoryId y el BrandID de  la action')
    return dispatch({ type: GET_PRODUCT, payload: product.data });
  };

export const getCategories =
  ({ genre = undefined, brand = undefined }) =>
  async (dispatch) => {
    const categories = await axios.get(URL_GET_CATEGORIES, {
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
    const brand = await axios.get(URL_GET_BRAND, {
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
  const product = await axios.get(URL_GET_PRODUCT_DETAIL, {
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
export const resetCart = () => {
  return (dispatch) => {
    dispatch({ type: RESET_CART });
  };
};

export function topSeller() {
  return async function (dispatch) {
    var json = await axios.get(URL_TOP_SELLERS);

    return dispatch({
      type: TOP_SELLERS,
      payload: json.data,
    });
  };
}

export const postMercadoPago = (data) => {
  // console.log(data, "action");

  return async function (dispatch) {
    return axios
      .post(URL_MERCADO_PAGO, data)
      .then((response) => {
        dispatch({ type: MERCADO_PAGO, payload: response.data });
      })
      .catch((err) => console.error(err));
  };
};

export function addToCart(product) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
}
export function addToCartDetail(product) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART_DETAIL,
      payload: product,
    });
  };
}

export function userGoogleRegister(payload) {
  return async function () {
    try {
      const createUser = await axios.post(
        `https://free-style-store.herokuapp.com/users`,
        payload
      );

      return createUser;
    } catch (error) {
      return;
    }
  };
}

export function verification(payload) {
  return async function () {
    try {
      var json = await axios.get(
        `https://free-style-store.herokuapp.com/verify?email=${payload}`
      );
      return json;
    } catch (error) {}
  };
}
