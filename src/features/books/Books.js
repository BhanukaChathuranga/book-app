import Card from 'component/Card';
import { useSelector } from 'react-redux';
import { selectBooks } from './booksSlice';

function BooksList({ onClick }) {
  const books = useSelector(selectBooks);

  return (
    <>
      {books?.map((book) => (
        <Card key={book.id} book={book} onClick={onClick} />
      ))}
    </>
  );
}

export default BooksList;
