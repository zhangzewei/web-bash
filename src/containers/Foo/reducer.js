import * as at from 'constants/actionTypes';
import immutable from 'immutable';

const INITIAL_STATE = immutable.fromJS({
  message: '',
  result: '',
});

export default function foo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.CHANGE_MESSAGE:
      return state.update('result', () => action.result);
    default:
      return state;
  }
}
