

import {combineReducers} from 'redux';
import reducerProduct from './Reducer/reducerProduct';

const Reducers = combineReducers({
    reducerProduct: reducerProduct
})

export default Reducers;