import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DevFlags = {
  pages: {
    about: boolean;
    account: boolean;
    browse: boolean;
    contact: boolean;
    feed: boolean;
    login: boolean;
    home: boolean;
  };
  features: {};
};

const initialState: DevFlags = {
  pages: {
    about: false,
    account: true,
    browse: false,
    contact: true,
    feed: false,
    login: false,
    home: false,
  },
  features: {}
};

const moduleSlice = createSlice({
  name: "development",
  initialState,
  reducers: {
    togglePageFlag: (state, action: PayloadAction<keyof DevFlags["pages"]>) => {
      const key = action.payload;
      state.pages[key] = !state.pages[key];
    },
    setPageFlag: (state, action: PayloadAction<{ key: keyof DevFlags["pages"]; value: boolean }>) => {
      const { key, value } = action.payload;
      state.pages[key] = value;
    }
  }
});

export const { togglePageFlag, setPageFlag } = moduleSlice.actions;
export default moduleSlice.reducer;