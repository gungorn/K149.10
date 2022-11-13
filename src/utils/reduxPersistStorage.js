import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'redux',
});

export const REDUX_PERSIST_STORAGE = {
  setItem: (k, v) =>
    new Promise(resolve => {
      console.time('--- REDUX-PERSIST-SET ---');
      resolve(storage.set(k, v));
      console.timeEnd('--- REDUX-PERSIST-SET ---');
    }),

  getItem: k =>
    new Promise(resolve => {
      console.time('--- REDUX-PERSIST-GET ---');
      resolve(storage.getString(k));
      console.timeEnd('--- REDUX-PERSIST-GET ---');
    }),

  removeItem: k =>
    new Promise(resolve => {
      console.time('--- REDUX-PERSIST-DELETE ---');
      resolve(storage.delete(k));
      console.timeEnd('--- REDUX-PERSIST-DELETE ---');
    }),

  getAllKeys: () =>
    new Promise(resolve => {
      console.time('--- REDUX-PERSIST-GET-ALL-KEYS ---');
      resolve(storage.getAllKeys());
      console.timeEnd('--- REDUX-PERSIST-GET-ALL-KEYS ---');
    }),
};
