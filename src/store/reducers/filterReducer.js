const initialState = 'ALL';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER ALL':
      return 'ALL';
    case 'FILTER ACTIVE':
      return 'ACTIVE';
    case 'FILTER COMPLETED':
      return 'COMPLETED';
    default:
      return state;
  }
};

export default filterReducer;
