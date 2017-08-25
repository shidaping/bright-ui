import { SHOW_ALERT, HIDE_ALERT } from '../constants.js';

const initialState = {
  boolShow: false,
  children: null,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return { boolShow: true, children: action.data.children };
    case HIDE_ALERT:
      return { boolShow: false };
    default:
      return state;
  }
}
