import { config } from '@reactant/core';
import axios from 'axios';
import { startLoading, finishLoading } from './loading';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(username, password) {
  return async dispatch => {
    const key = `${REGISTER_USER}_${Date.now()}`;
    dispatch(startLoading(key));
    let body = {
      id: 'some-id',
      username: 'some-username'
    };
    try {
      const res = await axios.post(
        `${config.services.flashcardApi}/auth/register`,
        {
          username,
          password
        }
      );
      body = res.data;
    } catch {}
    dispatch(finishLoading(key));
    dispatch({
      type: REGISTER_USER,
      payload: body
    });
  };
}

export function loginUser(username, password) {
  return async dispatch => {
    const key = `${LOGIN_USER}_${Date.now()}`;
    dispatch(startLoading(key));
    let body = {
      id: 'some-id',
      username: 'some-username'
    };
    try {
      const res = await axios.post(
        `${config.services.flashcardApi}/auth/login`,
        {
          username,
          password
        }
      );
      body = res.data;
    } catch {}
    dispatch(finishLoading(key));
    dispatch({
      type: LOGIN_USER,
      payload: body
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null
  };
}
