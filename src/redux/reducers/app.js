import {SET_INPUT_MODAL_VISIBLE, SET_LIST} from '../constants/app';

const initialState = {
  list: [],
  inputModalVisible: false,
};

export const app = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case SET_LIST:
      return {...state, list: actionObj.payload};

    case SET_INPUT_MODAL_VISIBLE:
      return {...state, inputModalVisible: actionObj.payload};

    default:
      return state;
  }
};
