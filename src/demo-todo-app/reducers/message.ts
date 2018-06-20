import {TODO_ADD, TODOS_LOAD} from '@src/demo-todo-app/reducers/todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (msg) => ({
  type: MESSAGE_SHOW,
  payload: msg,
});

export default (state: string = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODOS_LOAD:
    case TODO_ADD:
      return '';
    default:
      return state;
  }
};
