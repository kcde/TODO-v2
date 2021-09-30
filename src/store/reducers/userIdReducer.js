const initialState = null;

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET USER ID':
      return action.payload;

    default:
      return state;
  }
};

export default userIdReducer;
