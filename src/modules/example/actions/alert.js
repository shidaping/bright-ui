import { SHOW_ALERT, HIDE_ALERT } from '../constants';
export function showAlert(dispatch, requestData) {
  dispatch({
    type: SHOW_ALERT,
    data: requestData,
  });
}
export function hideAlert(dispatch, requestData) {
  dispatch({
    type: HIDE_ALERT,
    data: requestData,
  });
}
