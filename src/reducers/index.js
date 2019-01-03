import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loading from './loading';
import user from './user';

export default combineReducers({ loading, user, form });
