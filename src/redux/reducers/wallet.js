import {
  RECEIVE_ADD_FIELD_SUCCESS,
  RECEIVE_CURRENCY_FAILURE,
  RECEIVE_CURRENCY_SUCCESS,
  RECEIVE_TOTAL_FIELD,
  REQUEST_LOADING,
} from '../actions';

const INITIAL_STATE = {
  field: 0.00,
  exchangeRates: {},
  currencies: [],
  ok: true,
  loading: false,
  expenses: [],
};

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOADING:
    return {
      ...state,
      loading: true,
    };
  case RECEIVE_CURRENCY_SUCCESS:
    return {
      ...state,
      exchangeRates: action.payload,
      currencies: Object.keys(action.payload),
      ok: true,
      loading: false,
    };
  case RECEIVE_CURRENCY_FAILURE:
    return {
      ...state,
      ok: false,
      loading: false,
    };
  case RECEIVE_ADD_FIELD_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload,
          exchangeRates: action.exchange,
        },
      ],
    };
  case RECEIVE_TOTAL_FIELD:
    // const valorPrevio = state.field;
    // const valorAdicional = parseFloat(action.field);
    // const cotacao = parseFloat(state.exchangeRates[action.currency].ask);
    return {
      ...state,
      field: (
        parseFloat(state.field) + (
          parseFloat(action.field)
        * parseFloat(state.exchangeRates[action.currency].ask)
        )
      ).toFixed(2),
    };
  default:
    return {
      ...state,
      loading: false,
    };
  }
};

export default wallet;
