import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const reducer = combineReducers({
  TodoList: todoReducer,
});

export default reducer;
