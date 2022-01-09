import ReactDOM from 'react-dom';
import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeGA } from './config/google';
import Loader from './components/layouts/Loader';
import Paths from './routes/paths';
import store from './redux/store';
import App from './App';

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
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <WithRedux />
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);
