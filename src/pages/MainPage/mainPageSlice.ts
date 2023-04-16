import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useMarvelService from '../../service/marvelService';
import { TCharacter } from '../../types/types';

export interface IMainPageState {
  search: string;
  characters: TCharacter[];
  charactersLoadingStatus: string;
  character: null | TCharacter;
  characterLoadingStatus: string;
  characterId: number | null;
}

export const getCharacters = createAsyncThunk('mainPage/getCharacters', (name: string) => {
  const { getAllCharacters } = useMarvelService();
  return getAllCharacters(name);
});

export const getCharacter = createAsyncThunk('mainPage/getCharacter', (id: number) => {
  const { getCharacter } = useMarvelService();
  return getCharacter(id);
});

const initialState = {
  search: '',
  characters: [],
  charactersLoadingStatus: 'idle',
  character: null,
  characterLoadingStatus: 'idle',
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
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.charactersLoadingStatus = 'loading';
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.charactersLoadingStatus = 'idle';
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state) => {
        state.charactersLoadingStatus = 'error';
      })
      .addCase(getCharacter.pending, (state) => {
        state.characterLoadingStatus = 'loading';
      })
      .addCase(getCharacter.fulfilled, (state, action) => {
        state.characterLoadingStatus = 'idle';
        state.character = action.payload;
      })
      .addCase(getCharacter.rejected, (state) => {
        state.characterLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = mainPageSlice;
export default reducer;
export const { searchUpdated, idUpdated } = actions;
