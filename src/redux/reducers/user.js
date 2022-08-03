import { TYPE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

// Esse reducer será responsável por tratar as informações da pessoa usuária

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TYPE_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return {
      ...state,
    };
  }
};

export default user;
