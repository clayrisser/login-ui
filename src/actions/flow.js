import axios from 'axios';
import { config, log } from '@reactant/core';

export const CONSENT_FLOW = 'CONSENT_FLOW';
export const LOGIN_FLOW = 'LOGIN_FLOW';

export function loginFlow(challenge, username, password) {
  return async dispatch => {
    dispatch({ type: null, meta: { loading: true } });
    const res = await axios
      .get(`${config.services.identityApi}/auth/login`, {
        params: { challenge },
        auth: { username, password }
      })
      .catch(log.warn);
    dispatch({
      type: LOGIN_FLOW,
      meta: { loading: false },
      payload: res?.data || {}
    });
  };
}

export function consentFlow(challenge, grantScope = []) {
  return async dispatch => {
    dispatch({ type: null, meta: { loading: true } });
    const res = await axios
      .post(
        `${config.services.identityApi}/auth/consent`,
        { grantScope },
        {
          params: { challenge }
        }
      )
      .catch(log.warn);
    dispatch({
      type: CONSENT_FLOW,
      meta: { loading: false },
      payload: res?.data || {}
    });
  };
}

export default { CONSENT_FLOW, LOGIN_FLOW, consentFlow, loginFlow };
