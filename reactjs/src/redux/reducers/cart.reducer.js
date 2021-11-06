import { ADD_TO_CART, LOADING_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT, REMOVE_FROM_CART, REMOVE_ALL_ITEMS } from "../types"

const initialState = {
    loading: false,
    cartItems: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case LOADING_CART:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_CART:
            let product_existed = state.cartItems && state.cartItems.map(el => { return el.productNumber });
            let existed = product_existed && product_existed.includes(action.payload.productNumber);

            if (!existed) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    loading: false
                }
            }
            if (existed) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(el => el.productNumber === action.payload.productNumber ?
                        { ...el, itemCount: el.itemCount + 1 } : el),
                    loading: false
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el.productNumber !== action.payload),
                loading: false
            }

        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(el => el.productNumber === action.payload.productNumber ?
                    { ...el, itemCount: el.itemCount + 1 } : el),
                loading: false
            }

        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(el => el.productNumber === action.payload.productNumber ?
                    { ...el, itemCount: el.itemCount - 1 } : el),
                loading: false
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el.productNumber !== action.payload.productNumber),
                loading: false
            }

        case REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
                loading: false
            }

        default:
            return state;
    }
}