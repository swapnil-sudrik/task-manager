// actions.js

export const toggleDarkMode = () => {
    return {
      type: 'TOGGLE_DARK_MODE',
    };
  };
  
  export const setDarkMode = (isDarkMode) => {
    return {
      type: 'SET_DARK_MODE',
      payload: isDarkMode,
    };
  };
  