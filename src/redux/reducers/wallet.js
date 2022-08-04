import { RECEIVE_CURRENCY_FAILURE, RECEIVE_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  field: 0,
  currencyField: 'BRL',
  currencies: [],
  ok: true,
};

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY_SUCCESS:
    console.log(action.payload);
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
      ok: true,
    };
  case RECEIVE_CURRENCY_FAILURE:
    return {
      ...state,
      ok: false,
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
