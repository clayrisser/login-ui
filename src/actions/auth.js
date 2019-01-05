import axios from 'axios';
import { config, log } from '@reactant/core';

export function login(challenge, username, password) {
  return async dispatch => {
    dispatch({ type: null, meta: { loading: true } });
    await axios
      .get(`${config.services.identityApi}/auth/login`, {
        params: { challenge },
        auth: { username, password }
      })
      .catch(log.warn);
    dispatch({ type: null, meta: { loading: false } });
  };
}

export function consent(challenge, payload = {}) {
  return async dispatch => {
    dispatch({ type: null, meta: { loading: true } });
    await axios
      .post(`${config.services.identityApi}/auth/consent`, payload, {
        params: { challenge }
      })
      .catch(log.warn);
    dispatch({ type: null, meta: { loading: false } });
  };
}

export default { consent, login };
