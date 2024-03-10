// rootReducer.js

import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';

const rootReducer = combineReducers({
  isDarkMode: darkModeReducer,
});

export default rootReducer;
