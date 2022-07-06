import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS } from "../actions/fetchProducts"

interface iActionType {
    type: string,
    payload?: any
}

const initialState = {
    products: [],
    isFetching: false,
    errorMessage: undefined
}

export const fetchProductsReducer = (state = initialState, action: iActionType) => {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            }
        // vai voltar o errorMessage e isFetching para os valores do initialState e mudar o products para o payload da action
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                errorMessage: initialState.errorMessage,
                isFetching: initialState.isFetching,
                products: action.payload
            }
        case FETCH_PRODUCTS_ERROR :
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: initialState.isFetching,
                products: []
            }
        default:
            return {
                ...state
            }
    }
}