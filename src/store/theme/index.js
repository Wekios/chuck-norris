import { getFromStorage, setIntoStorage } from "utils/storage";

// Small file, didn't want to break it out into multiple files

export const SET_THEME = "SET_THEME";
export const THEME_KEY = "theme";

export const setThemeMode = (theme) => {
  setIntoStorage(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  return { type: SET_THEME, payload: theme };
};

const initialState = {
  theme: getFromStorage(THEME_KEY, ""),
};

export const themeReducer = (state = initialState, action) => {
  if (action.type === SET_THEME) {
    return {
      theme: action.payload,
    };
  }
  return state;
};
