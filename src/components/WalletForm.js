import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      field: 0,
      description: '',
      // currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
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
      // currency,
      method,
      tag,
    } = this.state;
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
        {
          // select - option - map - a partir do valor currency do state global
        }
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

const mapDispatchToProps = () => ({

});

export default connect(null, mapDispatchToProps)(WalletForm);
