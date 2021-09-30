import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET TODO':
      return action.payload;
    case 'ADD TODO':
      return [...state, action.payload];

    // case 'REMOVE TODO':
    //   return state.filter((todo) => todo.id !== action.payload);
    // case 'COMPLETE TODO':
    //   return state.map((todo) =>
    //     todo.id === action.payload ? { ...todo, completed: true } : { ...todo }
    //   );
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

export default todoReducer;
