import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function view(state = initialState.view, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalVisible: true,
        modalTitle: action.result.modalTitle,
        modalMessage: action.result.modalMessage,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalVisible: false,
        modalTitle: '',
        modalMessage: '',
      };
    default:
      return state;
  }
}
