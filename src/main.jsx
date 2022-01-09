import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeGA } from './config/google';
import ReactDOM from 'react-dom';
import Loader from './components/layouts/Loader';
import Paths from './routes/paths';
import store from './redux/store';
import App from './App';
import './config/i18n';

initializeGA();

const WithRouter = () => (
  <BrowserRouter basename={Paths.HOME}>
    <App />
  </BrowserRouter>
);

const WithRedux = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <WithRedux />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
