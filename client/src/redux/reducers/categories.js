import { ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORIES } from '../actions/categories';

const initialState = []

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };  
    default:
      return state
  }
}

