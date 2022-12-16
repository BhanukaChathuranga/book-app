function Card({
  book: {
    id,
    url = '',
    name = '',
    year = '2022',
    author = '',
    description = '',
  },
  onClick = () => {},
}) {
  return (
    <div
      key={id}
      className="cursor-pointer flex flex-col max-h-80 items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={() => onClick(id)}
    >
      <img
        className="object-cover w-full rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={url}
        alt={`img-${id}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-1 text-xl font-normal text-gray-700 dark:text-gray-400">
          {author} - {year}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
