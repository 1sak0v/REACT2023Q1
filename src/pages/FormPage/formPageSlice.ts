import { createSlice } from '@reduxjs/toolkit';

export interface IFormPageState {
  profiles: Array<{
    id: string;
    name: string;
    birthday: string;
    continent: string;
    skills: string[];
    gender: string;
    picture: string;
  }>;
}

const initialState = {
  profiles: [],
} as IFormPageState;

const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    profileCreated: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

const { actions, reducer } = formPageSlice;
export default reducer;
export const { profileCreated } = actions;
