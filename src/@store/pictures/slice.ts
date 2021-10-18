import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';
import { PicturesDataType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const picturesInitialState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } as PicturesDataType,
  loading: false,
  page: 1,
  pictureSearch: 'nature',
  largeImageURL: '',
  tags: '' as string,
};
export const picturesTC = createAsyncThunk<
  PicturesDataType,
  { pictureSearch: string; page: number },
  any
>('pictures/picturesTC', async (param, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));
  try {
    await waitForMe(1000);
    const res = await pictureAPI.fetchImages(param.pictureSearch, param.page);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const slice = createSlice({
  name: 'pictures',
  initialState: picturesInitialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    incrementPage(state) {
      state.page += 1;
    },
    setPictureSearch(state, action) {
      state.data.hits = []; // clear
      state.page = 1;
      state.pictureSearch = action.payload;
    },
    setImageData(state, action) {
      state.largeImageURL = action.payload.largeImageURL;
      state.tags = action.payload.tags;
    },
    clearImageData(state) {
      state.largeImageURL = '';
      state.tags = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(picturesTC.fulfilled, (state, action) => {
      if (action.payload) {
        // state.data = action.payload.data;
        state.data.total = action.payload.total;
        state.data.totalHits = action.payload.totalHits;
        state.data.hits.push(...action.payload.hits);
      }
    });
  },
});

export const picturesReducer = slice.reducer;
export const {
  setLoading,
  incrementPage,
  setPictureSearch,
  setImageData,
  clearImageData,
} = slice.actions;
