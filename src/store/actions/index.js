import * as actionTypes from './actionTypes';

export const add_todo = (todo) => {
  return {
    type: actionTypes.add_todo,
    payload: todo,
  };
};
export const remove_todo = (id) => {
  return {
    type: actionTypes.remove_todo,
    payload: id,
  };
};
export const complete_todo = (id) => {
  return {
    type: actionTypes.complete_todo,
    payload: id,
  };
};
