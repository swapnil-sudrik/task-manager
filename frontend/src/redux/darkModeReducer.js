// darkModeReducer.js

const darkModeReducer = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return !state;
    case 'SET_DARK_MODE':
      return action.payload;
    default:
      return state;
  }
};

export default darkModeReducer;
