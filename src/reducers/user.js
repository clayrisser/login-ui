import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '~/actions/user';

export default function user(state = {}, { type, payload }) {
  switch (type) {
    case LOGIN_USER:
      return payload;
    case LOGOUT_USER:
      return {};
    case REGISTER_USER: {
      return payload;
    }
  }
  return state;
}
