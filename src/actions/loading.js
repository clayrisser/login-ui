export const START_LOADING = 'LOGIN_USER';
export const FINISH_LOADING = 'LOGOUT_USER';

export function startLoading(key) {
  return {
    type: START_LOADING,
    payload: key
  };
}

export function finishLoading(key) {
  return {
    type: FINISH_LOADING,
    payload: key
  };
}
