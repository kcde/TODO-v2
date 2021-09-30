import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
import filterReducer from './filterReducer';
import userIdReducer from './userIdReducer';

const reducer = combineReducers({
  TodoList: todoReducer,
  filter: filterReducer,
  authId: userIdReducer,
});

export default reducer;
