import { CONSENT_FLOW, LOGIN_FLOW } from '~/actions/flow';

export default function(state = { consent: {}, login: {} }, { payload, type }) {
  switch (type) {
    case CONSENT_FLOW:
      return { ...state, consent: payload };
    case LOGIN_FLOW:
      return { ...state, login: payload };
  }
  return state;
}
