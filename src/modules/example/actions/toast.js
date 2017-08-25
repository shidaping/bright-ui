import { SHOW_TOAST, HIDE_TOAST } from '../constants';
let timeout = null;
export function showToast(opt) {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOAST,
      opt,
    });
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      dispatch({
        type: HIDE_TOAST,
      });
    }, 3000);
  };
}
