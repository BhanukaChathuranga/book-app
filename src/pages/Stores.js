import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'features/store/Stores';
import {
  getBooksByStoreIdAsync,
  getStoreAsync,
  selectStore,
} from 'features/store/storesSlice';

function Stores() {
  const stores = useSelector(selectStore);

  const dispatch = useDispatch();
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(getStoreAsync());
  }, [dispatch]);

  const onChange = useCallback(() => {
    if (!selectRef) return;
    const id = selectRef.current.value;
    dispatch(getBooksByStoreIdAsync(id));
  }, [dispatch]);

  return (
    <div className="main">
      <select
        id="stores"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        ref={selectRef}
      >
        <option value="0" key={0}>
          Choose a store
        </option>
        {stores?.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
      <Store />
    </div>
  );
}

export default Stores;
