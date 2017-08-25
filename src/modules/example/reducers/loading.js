import { SHOW_LOADING, HIDE_LOADING } from '../constants.js';

const initialState = {
  boolShow: false,
  children: null,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return { boolShow: true, children: action.opt.children };
    case HIDE_LOADING:
      return { boolShow: false };
    default:
      return state;
  }
}
