import TabGroup from './TabGroup';
import AddBook from './AddBook';

const categories = {
  Books: <AddBook />,
  Store: [<AddBook />],
};

function Add() {
  return (
    <div className="main">
      <TabGroup categories={categories} />
    </div>
  );
}

export default Add;
