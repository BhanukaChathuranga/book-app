import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getBooksAsync } from 'features/books/booksSlice';
import BooksList from 'features/books/Books';
import DialogBox from 'component/DialogBox';
import useToggle from 'hooks/useToggle';
import { deleteBookById, getBookById } from 'services/BooksAPI';

const getData = async (id, setBookData) => {
  if (!id) setBookData(null);
  const book = await getBookById(id);
  setBookData(book);
};

function Books() {
  const dispatch = useDispatch();
  const {
    toggleOn: openModal,
    toggleOff: closeModal,
    value: isShow,
  } = useToggle(false);

  const {
    toggleOn: openUpadateModal,
    toggleOff: closeUpadateModal,
    value: isUpdateShow,
  } = useToggle(false);

  const {
    toggleOn: openDeleteModal,
    toggleOff: closeDeleteModal,
    value: isDeleteShow,
  } = useToggle(false);

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  const onClick = useCallback(
    (id) => {
      getData(id, setBookData);
      openModal();
    },
    [openModal]
  );

  const onRemove = useCallback(() => {
    closeModal();
    setBookData(null);
  }, [closeModal]);

  const onUpdateClick = useCallback(() => {
    closeModal();
    openUpadateModal();
  }, [openUpadateModal, closeModal]);

  const onUpdateRemove = useCallback(() => {
    closeUpadateModal();
  }, [closeUpadateModal]);

  const onDeleteClick = useCallback(() => {
    closeModal();
    openDeleteModal();
  }, [openDeleteModal, closeModal]);

  const onDeleteRemove = useCallback(() => {
    closeDeleteModal();
  }, [closeDeleteModal]);

  const title = useMemo(() => {
    if (!bookData) return;
    const title = `${bookData?.name || ''} - ${bookData.year || ''}`;
    return title;
  }, [bookData]);

  const body = useCallback(() => {
    if (!bookData) return <></>;
    return <span>{bookData?.description || ''}</span>;
  }, [bookData]);

  const footer = useCallback(() => {
    if (!bookData) return <></>;
    return (
      <>
        <button
          type="button"
          className="accept-button mr-4"
          onClick={onUpdateClick}
        >
          Update it!
        </button>
        <button
          type="button"
          className="delete-button mr-4"
          onClick={onDeleteClick}
        >
          Delete it!
        </button>
      </>
    );
  }, [bookData, onUpdateClick, onDeleteClick]);

  const updateModalBody = useCallback(() => {
    if (!bookData) return <></>;
    return <span>test body</span>;
  }, [bookData]);

  const deleteModalBody = useCallback(() => {
    if (!bookData) return <></>;
    return <span>Do you want to delete this book?</span>;
  }, [bookData]);

  const onDelete = useCallback(
    async ({ id }) => {
      await deleteBookById(id);
      dispatch(getBooksAsync());
      onDeleteRemove();
    },
    [dispatch, onDeleteRemove]
  );

  const deleteFooter = useCallback(() => {
    if (!bookData) return <></>;
    return (
      <>
        <button
          type="button"
          className="delete-button mr-4"
          onClick={() => onDelete(bookData)}
        >
          Delete it!
        </button>
      </>
    );
  }, [bookData, onDelete]);

  return (
    <>
      <div className="h-full w-full p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <BooksList onClick={onClick} />
      </div>
      {!!bookData && (
        <DialogBox
          title={title}
          body={body}
          isOpen={isShow}
          closeModal={onRemove}
          footer={footer}
        />
      )}
      {!!bookData && (
        <DialogBox
          title={'Update Book'}
          body={updateModalBody}
          isOpen={isUpdateShow}
          closeModal={onUpdateRemove}
        />
      )}
      {!!bookData && (
        <DialogBox
          title={'Delete Book'}
          body={deleteModalBody}
          footer={deleteFooter}
          isOpen={isDeleteShow}
          closeModal={onDeleteRemove}
        />
      )}
    </>
  );
}

export default Books;
