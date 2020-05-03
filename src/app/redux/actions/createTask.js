import { CREATE_TASK } from './actionTypes';

export const createTask = (groupID) => ({
  type: CREATE_TASK,
  groupID
});