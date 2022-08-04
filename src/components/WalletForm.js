import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyFetch } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      field: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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

  addField = () => {

  }

  render() {
    const {
      field,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencies } = this.props;

    return (
      <form>
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
              .map((key, index) => (
                <option key={ index }>
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
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="submit"
          onClick={ this.addField }
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
});

WalletForm.propTypes = {
  currencyDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
