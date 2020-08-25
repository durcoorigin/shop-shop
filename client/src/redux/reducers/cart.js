import { ADD_CART, REMOVE_CART, CLEAR_CART } from '../actions/products';

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case REMOVE_CART:
      return {
        ...state,
         products: state.products.filter(product => product.id !== action.payload)
      };
    case CLEAR_CART:
      return {
        ...state,
          products: action.payload
      };  
    default:
      return state
  }
}

