import React from 'react';
import { Provider } from 'react-redux';

import ErrorBoundary from '../src/containers/ErrorBoundary/index';

import store from '../src/store/index';

import './App.scss';

const App = ({Component, pageProps}) => (
    <Provider store={store}>
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    </Provider>
);
export default App;