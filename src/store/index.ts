import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import quizSettings from './quizSettings';

import rootSaga from '@src/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware({
        thunk: false
    }),
    sagaMiddleware
];

const store = configureStore({
    reducer: {
      quizSettings
    },
    middleware
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
