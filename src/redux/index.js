import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

import {app} from './reducers/app';

const store = configureStore({
  //devTools: true,
  //middleware: [],
  reducer: combineReducers({app}),
});

export default store;
