import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../constants/actionTypes';

export function showModal(modalTitle, modalMessage) {
  return {
    type: SHOW_MODAL,
    result: {
      modalTitle,
      modalMessage,
    },
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
