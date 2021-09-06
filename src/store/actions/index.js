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
export const clear_completed = () => {
  return {
    type: actionTypes.clear_completed,
  };
};
export const filter_all = () => {
  return {
    type: actionTypes.filter_all,
  };
};
export const filter_active = () => {
  return {
    type: actionTypes.filter_active,
  };
};
export const filter_completed = () => {
  return {
    type: actionTypes.filter_completed,
  };
};
export const update_list_order = (newList) => {
  return {
    type: actionTypes.update_list_order,
    payload: newList,
  };
};
