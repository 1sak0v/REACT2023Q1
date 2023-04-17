import { createSlice } from '@reduxjs/toolkit';

export interface IMainPageState {
  search: string;
  characterId: number | null;
}

const initialState = {
  search: '',
  characterId: null,
} as IMainPageState;

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    searchUpdated: (state, action) => {
      state.search = action.payload;
    },
    idUpdated: (state, action) => {
      state.characterId = action.payload;
    },
  },
});

const { actions, reducer } = mainPageSlice;
export default reducer;
export const { searchUpdated, idUpdated } = actions;
