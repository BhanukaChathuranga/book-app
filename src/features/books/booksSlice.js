import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from 'constant/index';
import {
  addBook,
  getBookById,
  getBooks,
  updateBookById,
} from 'services/BooksAPI';

const initialState = {
  books: [],
  status: Status.Idle,
};

export const getBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => await getBooks()
);

export const getBookAsync = createAsyncThunk(
  'books/fetchBook',
  async (id) => await getBookById(id)
);

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (data) => await addBook(data)
);

export const updateBookDetailsAsync = createAsyncThunk(
  'books/updateBookDetails',
  async (id, data) => await updateBookById(id, data)
);

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBook',
  async (id) => await deleteBookAsync(id)
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        state.status = Status.Idle;
        state.books = action.payload;
      })
      .addCase(getBookAsync.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getBookAsync.fulfilled, (state, action) => {
        state.status = Status.Idle;
        state.books = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = booksSlice.actions;

export const selectBooks = (state) => state.book.books;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
//   export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default booksSlice.reducer;
