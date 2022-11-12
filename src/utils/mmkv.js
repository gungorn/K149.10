import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

export const setItem = (key, value) => storage.set(key, value);
export const getItem = (key, type = 'string') => {
  switch (type) {
    case 'string':
      return storage.getString(key);
    case 'number':
      return storage.getNumber(key);
    case 'boolean':
      return storage.getBoolean(key);
  }
};
