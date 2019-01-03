import _ from 'lodash';
import { START_LOADING, FINISH_LOADING } from '~/actions/loading';

export default function loading(state = [], { type, payload }) {
  switch (type) {
    case START_LOADING:
      return [...state, payload];
    case FINISH_LOADING: {
      const loading = [...state];
      _.remove(loading, key => {
        return key === payload;
      });
      return loading;
    }
  }
  return state;
}
