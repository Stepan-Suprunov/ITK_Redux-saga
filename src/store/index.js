import { applyMiddleware, createStore } from 'redux';
import { customerReducer } from './customerReduser';
import { fetchUsersWatcher } from '../saga/userSaga'; 
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    customerReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchUsersWatcher);
