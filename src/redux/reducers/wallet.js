const INITIAL_STATE = {
  field: 0,
  currencyField: 'BRL',
};

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
