import {SET_INPUT_MODAL_VISIBLE, SET_LIST} from '../constants/app';

export const setList = list => {
  return {type: SET_LIST, payload: list};
};

export const setInputModalVisible = isVisible => {
  return {type: SET_INPUT_MODAL_VISIBLE, payload: isVisible};
};
