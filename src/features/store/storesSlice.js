import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from 'constant/index';
import { getBookByStoreId, getStores } from 'services/StoresAPI';

const initialState = {
  stores: [],
  books: [],
  status: Status.Idle,
};

export const getStoreAsync = createAsyncThunk(
  'stores/fetchStore',
  async () => await getStores()
);

export const getBooksByStoreIdAsync = createAsyncThunk(
  'stores/fetchBooksByStore',
  async (id) => await getBookByStoreId(id)
);

export const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStoreAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getStoreAsync.fulfilled, (state, action) => {
        state.status = Status.Idle;
        state.stores = action.payload;
      })
      .addCase(getBooksByStoreIdAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getBooksByStoreIdAsync.fulfilled, (state, action) => {
        state.status = Status.Idle;
        state.books = action.payload;
      });
  },
});

export const selectStore = (state) => state.store.stores;
export const selectBooksByStore = (state) => state.store.books;

export default storeSlice.reducer;
