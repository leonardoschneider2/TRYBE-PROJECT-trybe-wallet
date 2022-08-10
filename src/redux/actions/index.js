export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_THUNK_CURRENCY_FETCH = 'TYPE_THUNK_CURRENCY_FETCH';
// Loading request para usar sempre que fizer requisição API
export const REQUEST_LOADING = 'REQUEST_LOADING';
// Currency Fetch
export const RECEIVE_CURRENCY_SUCCESS = 'RECEIVE_CURRENCY_SUCCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';
// addField
export const RECEIVE_TOTAL_FIELD = 'RECEIVE_TOTAL_FIELD';
export const RECEIVE_ADD_FIELD_SUCCESS = 'RECEIVE_ADD_FIELD_SUCCESS';
export const RECEIVE_ADD_FIELD_FAILURE = 'RECEIVE_ADD_FIELD_FAILURE';

const currencyFetchAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resolve) => resolve.json())
    .then((json) => Promise.resolve(json))
    .catch((json) => Promise.reject(json));
  return response;
};

// Coloque aqui suas actions
const dispatchEmailToStore = (email) => ({
  type: TYPE_EMAIL,
  email,
});

// async actions para trazer o valor de currency para o wallet
const requestLoading = () => ({
  type: REQUEST_LOADING,
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
    dispatch(requestLoading());

    try {
      const response = await currencyFetchAPI();
      dispatch(receiveCurrencySuccess(response));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  }
);

// Action para dispachar mais uma despesa
const receiveAddFieldSuccess = ({
  description, currency, method, tag, id, field,
}, responseAPI) => {
  console.log('maeai', responseAPI);
  return {
    type: RECEIVE_ADD_FIELD_SUCCESS,
    payload: {
      description, currency, method, tag, id, value: field,
    },
    exchange: responseAPI,
  };
};

const receiveAddFieldFailure = (error) => ({
  type: RECEIVE_ADD_FIELD_FAILURE,
  payload: error,
});

const receiveTotalField = ({ field, currency }) => ({
  type: RECEIVE_TOTAL_FIELD,
  field,
  currency,
});

export const addField = (field) => (
  async (dispatch) => {
    // fazer o load ativo
    dispatch(requestLoading());
    // try catch requisição
    try {
      const obj = await currencyFetchAPI();
      console.log(obj);
      dispatch(receiveAddFieldSuccess(field, obj));
      console.log('caralho borracha', field);
      dispatch(receiveTotalField(field));
    } catch (error) {
      dispatch(receiveAddFieldFailure(error));
    }
  }
);

export default dispatchEmailToStore;
