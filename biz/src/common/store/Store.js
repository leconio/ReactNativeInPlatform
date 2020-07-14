import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // 中间件，实现可dispatch函数功能
import {navMiddleware} from '../navigator/AppNavigator';
import {RootReducer} from './Reducer';

const middlewareArray = [thunk, navMiddleware];

export const storeWithInitialState = (initialState) => {
  return createStore(
    RootReducer,
    initialState,
    applyMiddleware(...middlewareArray),
  );
};
