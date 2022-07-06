import axios from "axios";

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProductsStarted = () => {
    return {
        type: FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = (products: []) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (errorMessage: string) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: errorMessage
    }
}

export const fetchProductsThunk = () => async (dispatch: any) => {
    dispatch(fetchProductsStarted())
    axios.get('http://localhost:3001/products').then(response => {
        dispatch(fetchProductsSuccess(response.data))
    }).catch(error => {
        dispatch(fetchProductsError(error.message))
    })
}

export const filterProductsThunk = () => async (dispatch: any, title: string) => {
    dispatch(fetchProductsStarted())
    if (title === '') {
        fetchProductsThunk()(dispatch)
    } else {
        axios.get(`http://localhost:3001/products?title_like=${title}`).then(response => {
            dispatch(fetchProductsSuccess(response.data))
        }).catch(error => {
            dispatch(fetchProductsError(error.message))
        })
    }

}