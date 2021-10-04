import { combineReducers } from 'redux';
import { inputReducer } from '../reducers/inputReducer';
import { todoReducer } from './todoReducer';

export default combineReducers({
    todos: todoReducer,
    todo: inputReducer,
});