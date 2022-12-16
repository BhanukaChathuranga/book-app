import { Provider } from 'react-redux';
import { store } from './Store';
import { Sidebar, ContentArea } from 'layouts';

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <Sidebar />
        <ContentArea />
      </div>
    </Provider>
  );
}

export default App;
