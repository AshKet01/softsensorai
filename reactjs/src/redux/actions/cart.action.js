
import { LOADING_CART, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT, REMOVE_FROM_CART } from "../types"



//ADD ITEM to cart
export const addToCartMain = (product) => dispatch => {
    dispatch({ type: LOADING_CART });
    dispatch({
        type: ADD_TO_CART,
        payload: { productNumber: product.id, product: product, itemCount: 1 }
    })
}

//REMOVE ITEM FROM CART
export const removeFromCartMain = (productNumber) => dispatch => {
    dispatch({ type: LOADING_CART });
    dispatch({
        type: REMOVE_FROM_CART,
        payload: productNumber
    })
}

export const increaseQnt = (productNumber) => dispatch => {
    dispatch({ type: LOADING_CART });
    dispatch({
        type: INCREASE_QUANTITY,
        payload: { productNumber: productNumber, itemCount: 1 }
    })

}
export const decreaseQnt = (productNumber) => dispatch => {
    dispatch({ type: LOADING_CART });
    dispatch({
        type: DECREASE_QUANTITY,
        payload: { productNumber: productNumber, itemCount: -1 }
    })
}

export const removeProduct = (productNumber) => dispatch => {
    dispatch({ type: LOADING_CART });
    dispatch({
        type: REMOVE_PRODUCT,
        payload: { productNumber: productNumber }
    })
}