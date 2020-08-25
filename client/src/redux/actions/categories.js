export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

export const addCategory = category => ({
  type: ADD_CATEGORY,
  payload: category
})

export const removeCategoryt = categoryId => ({
  type: REMOVE_CATEGORY,
  payload: categoryId
})

export const updateCategories = categories => ({
  type: UPDATE_CATEGORIES,
  payload: categories
})