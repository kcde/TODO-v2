import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  TodoList: todoReducer,
  filter: filterReducer,
});

export default reducer;
