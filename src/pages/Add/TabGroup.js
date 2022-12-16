import { Tab } from '@headlessui/react';
import AddBook from './AddBook';
import AddStore from './AddStore';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function TabGroup({ categories }) {
  return (
    <div className="w-full h-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 h-full">
          {Object.keys(categories).map((tabName, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white dark:bg-gray-500 p-3 h-full',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="mt-10 sm:mt-0 h-full">
                <div className="md:grid md:grid-cols-2 md:gap-6 w-full h-full">
                  <div className="mt-5 md:col-span-2 md:mt-0 w-full h-full">
                    {tabName === 'Books' && <AddBook />}
                    {tabName === 'Store' && <AddStore />}
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabGroup;
