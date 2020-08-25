export const ADD_CART = 'ADD_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const addToCart = product => ({
  type: ADD_CART,
  payload: product
})

export const clearCart = productId => ({
  type: CLEAR_CART,
  payload: productId
})

export const removeFromCart = products => ({
  type: REMOVE_CART,
  payload: products
})