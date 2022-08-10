import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addField, currencyFetch } from '../redux/actions';

const alimentacao = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      field: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };
  }

  componentDidMount() {
    const { currencyDispatch } = this.props;
    currencyDispatch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  callAddField = (event) => {
    event.preventDefault();
    const {
      field, description, currency, method, tag, id,
    } = this.state;
    const { addFieldInState } = this.props;
    const expense = {
      field, description, currency, method, tag, id,
    };
    addFieldInState(expense);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      field: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    }));
  }

  render() {
    const {
      field, description, currency, method, tag, id,
    } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <span>{ id }</span>
        <input
          type="number"
          data-testid="value-input"
          value={ field }
          onChange={ this.handleChange }
          name="field"
        />
        <input
          type="text"
          data-testid="description-input"
          value={ description }
          onChange={ this.handleChange }
          name="description"
        />
        <select
          type="text"
          data-testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
          name="currency"
        >
          {
            currencies
              .filter((ele) => ele !== 'USDT')
              .map((key, index) => (
                <option data-testid={ `currency-${key}` } key={ index }>
                  { key }
                </option>
              ))
          }
        </select>
        <select
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
          name="tag"
        >
          <option>{ alimentacao }</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="submit"
          onClick={ this.callAddField }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyDispatch: () => dispatch(currencyFetch()),
  addFieldInState: (expense) => dispatch(addField(expense)),
});

WalletForm.propTypes = {
  currencyDispatch: PropTypes.func.isRequired,
  addFieldInState: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
