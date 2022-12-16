import { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { addBook } from 'services/BooksAPI';

function AddBook() {
  const {
    register,
    handleSubmit,
    reset,
    submittedData,
    formState,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', author: '', year: '', description: '' });
    }
  }, [formState, submittedData, reset]);

  const onSubmit = useCallback(async (data, e) => {
    e.preventDefault();
    console.log(data);
    await addBook(data);
  }, []);

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="overflow-hidden w-full h-full">
        <div className="px-4 py-5 sm:p-6 w-full h-full">
          <div className="grid grid-cols-4 gap-6 h-full">
            {/* name */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="book-name" className="input-label">
                Name
              </label>
              <input
                type="text"
                name="book-name"
                id="book-name"
                autoComplete="book-name"
                className="input-text"
                {...register('name', { required: true })}
              />
            </div>

            {/* author */}
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="author" className="input-label">
                Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                autoComplete="author-name"
                className="input-text"
                {...register('author', { required: true })}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="year" className="input-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                autoComplete="year"
                className="input-text"
                {...register('year')}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="description" className="input-label">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="input-text pt-2"
                  {...register('description')}
                />
              </div>

              {errors.name?.type === 'required' && (
                <p role="alert">Book name is required</p>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <button type="submit" className="btn-submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddBook;
