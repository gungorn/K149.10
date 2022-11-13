import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {persistReducer} from 'redux-persist';

import {app} from './reducers/app';
import {REDUX_PERSIST_STORAGE} from '../utils/reduxPersistStorage';

const store = configureStore({
  //devTools: true,
  //middleware: [],
  //reducer: combineReducers({app}),
  reducer: persistReducer(
    {
      key: 'root',
      debug: false,
      blacklist: [],
      whitelist: ['app'],
      storage: REDUX_PERSIST_STORAGE,
      stateReconciler: autoMergeLevel2,
    },
    combineReducers({app}),
  ),
});

export default store;
