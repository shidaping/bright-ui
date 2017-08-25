import { SHOW_LOADING, HIDE_LOADING } from '../constants';
export function showLoading(opt) {
  return {
    type: SHOW_LOADING,
    opt: opt,
  };
}
export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
