import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';
import {
  PicturesDataResponseSchema,
  PicturesDataResponseType,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';
import type { RootState } from '../configureStore';

const picturesInitialState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } as PicturesDataResponseType,
  pictureSearch: 'nature',
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};
export const picturesTC = createAsyncThunk<
  PicturesDataResponseType,
  { page: number },
  { state: RootState }
>('pictures/picturesTC', async (param, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    await waitForMe(1000);
    const res = await pictureAPI.fetchImages(
      state.pictures.pictureSearch,
      param.page,
    );

    // ZOD validation
    try {
      PicturesDataResponseSchema.parse(res.data);
    } catch (error) {
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState: picturesInitialState,
  reducers: {
    setPictureSearch(state, action) {
      state.data.hits = []; // clear
      state.pictureSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(picturesTC.pending, (state) => {
        state.isFetching = true;
        //   clear data
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(picturesTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data.total = action.payload.total;
          state.data.totalHits = action.payload.totalHits;
          state.data.hits.push(...action.payload.hits);
        }
        state.isFetching = false;
        state.isSuccess = true;
      })
      // error
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isError = true;
        state.isFetching = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const picturesReducer = picturesSlice.reducer;
export const { setPictureSearch } = picturesSlice.actions;
