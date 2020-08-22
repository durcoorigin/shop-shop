import { combineReducers } from 'redux'

import {categoriesReducer} from './categories';
import {productReducer} from './products';

export default combineReducers({
    cart: categoriesReducer,
    categories: categoriesReducer,
    products: productReducer
})