import booksSlice from 'features/books/booksSlice';
import storeSlice from 'features/store/storesSlice';

export const reducers = {
  book: booksSlice,
  store: storeSlice,
};
