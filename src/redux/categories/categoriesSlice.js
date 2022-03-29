import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under construction',
    show: false,
  },
  reducers: {
    statusCategories: (state) => (state.status),
    toggleShow: (state) => (
      {
        ...state,
        show: !state.show,
      }
    ),
  },
});

export const { statusCategories, toggleShow } = categoriesSlice.actions;
export default categoriesSlice.reducer;
