import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET TODO':
      return action.payload;

    case 'UPDATE LIST ORDER':
      //? payload should be a new array which has already been reordered
      return action.payload;
    case 'CLEAR COMPLETED':
      return state.filter((todo) => todo.completed === false);

    default:
      return state;
  }
};

export const remove_todo = (todoId, userID) => (dispatch, getState) => {
  const newState = getState().TodoList.filter((todo) => todo.id !== todoId);
  const userRef = doc(db, 'users', userID);
  updateDoc(userRef, {
    lists: newState,
  });
};
export const complete_todo = (todoId, userID) => (dispatch, getState) => {
  const newState = getState().TodoList.map((todo) =>
    todo.id === todoId ? { ...todo, completed: true } : { ...todo }
  );
  const userRef = doc(db, 'users', userID);
  updateDoc(userRef, {
    lists: newState,
  });
};

export const clear_completed = (userID) => (dispatch, getState) => {
  const newState = getState().TodoList.filter((task) => task.completed !== true);
  if (newState) {
    const userRef = doc(db, 'users', userID);

    updateDoc(userRef, {
      lists: newState,
    });
  }
};
export default todoReducer;
