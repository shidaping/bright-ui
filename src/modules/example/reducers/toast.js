import { SHOW_TOAST, HIDE_TOAST } from '../constants.js';

const initialState = {
  boolShow: false,
  children: null,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return { boolShow: true, children: action.opt.children };
    case HIDE_TOAST:
      return { boolShow: false };
    default:
      return state;
  }
}
