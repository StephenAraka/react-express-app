import { combineReducers } from 'redux';
import { defaults } from './default';
import { createTask } from './createTask';

export default combineReducers({
  createTask,
  defaults
});
