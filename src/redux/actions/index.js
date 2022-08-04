import currencyFetchAPI from '../../services/currencyFetchAPI';

export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_THUNK_CURRENCY_FETCH = 'TYPE_THUNK_CURRENCY_FETCH';
export const REQUEST_CURRENCY_FETCH = 'REQUEST_CURRENCY_FETCH';
export const RECEIVE_CURRENCY_SUCCESS = 'RECEIVE_CURRENCY_SUCCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';

// Coloque aqui suas actions
const dispatchEmailToStore = (email) => ({
  type: TYPE_EMAIL,
  email,
});

// async actions para trazer o valor de currency para o wallet
const receiveCurrencyFetch = () => ({
  type: REQUEST_CURRENCY_FETCH,
});

const receiveCurrencySuccess = (responseAPI) => ({
  type: RECEIVE_CURRENCY_SUCCESS,
  payload: responseAPI,
});

const receiveCurrencyFailure = (error) => ({
  type: RECEIVE_CURRENCY_FAILURE,
  payload: error,
});

export const currencyFetch = () => (
  async (dispatch/* , getState */) => {
    // avisar a aplicação que o fetch vai ser iniciado
    dispatch(receiveCurrencyFetch());

    try {
      const response = await currencyFetchAPI();
      dispatch(receiveCurrencySuccess(response));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  }
);

export default dispatchEmailToStore;
