import { CREATE_TASK } from '../actions/actionTypes';
import { v4 as uuid } from 'uuid';
import { defaultState } from '../../../server/defaultState';

export const createTask = (state = defaultState.tasks, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        {
          id: uuid(),
          name: 'New Task',
          group: action.groupID,
          owner: 'U1',
          isComplete: false
        }
      ];

    default:
      return state;
  }
}