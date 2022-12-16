import { useMemo, useCallback } from 'react';

export function TableRow({ obj }) {
  const td = useMemo(() => Object.values(obj), [obj]);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {td?.map((value) => (
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {value}
          </th>
        ))}
        <td className="py-4 px-6 text-right">Edit</td>
      </tr>
    </>
  );
}

export function TableHeader({ header = [] }) {
  return (
    <tr>
      {header?.map((head) => (
        <th scope="col" class="py-3 px-6">
          {head}
        </th>
      ))}
    </tr>
  );
}

export function Table({ data }) {
  const header = useMemo(() => Object.keys(data), [data]);
  const row = useCallback(() => {
    data?.map((td) => <TableRow obj={td} />);
  }, [data]);

  return (
    <>
      {data.length > 0 && (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
              <TableHeader header={header} />
            </thead>
            <tbody>{row}</tbody>
          </table>
        </div>
      )}
    </>
  );
}
