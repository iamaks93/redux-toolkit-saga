import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import catReducer from './feature/cat/catSlice';
import catSaga from './feature/cat/catSaga';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        cats : catReducer,
    },
    middleware: [saga]
});
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       {/* <React.StrictMode>*/}
            <App/>
        {/*</React.StrictMode>*/}
    </Provider>
);
