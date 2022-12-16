import { useSelector } from 'react-redux';
import { selectBooksByStore } from './storesSlice';

export function Store() {
  const books = useSelector(selectBooksByStore);

  return (
    <>
      {books?.length <= 0 && (
        <h5 className="w-full text-sm text-left text-gray-500 dark:text-gray-400 pt-5">
          Not Found Data!
        </h5>
      )}
      {books?.length > 0 && (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg pt-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Author
                </th>
                <th scope="col" className="py-3 px-6">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {books?.map(({ id, name, author, year }) => {
                return (
                  <tr className="tr" key={id}>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {name}
                    </th>
                    <td className="py-4 px-6">{author}</td>
                    <td className="py-4 px-6">{year}</td>
                    {/* <td className="py-4 px-6">
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </p>
                  </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
