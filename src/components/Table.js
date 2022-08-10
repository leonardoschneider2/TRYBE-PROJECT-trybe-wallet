import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr className="table-expense">
          <th>Descrição</th>

          <th>Tag</th>

          <th>Método de pagamento</th>

          <th>Valor</th>

          <th>Moeda</th>

          <th>Câmbio utilizado</th>

          <th>Valor convertido</th>

          <th>Moeda de conversão</th>

          <th>Editar/Excluir</th>
        </tr>
        <tbody>
          {
            expenses.map((expense, index) => {
              const {
                exchangeRates, value, description, currency, method, tag,
              } = expense;
              return (
                <tr
                  className="table-expense"
                  key={ `expense-${index}` }
                >
                  <td
                    className="table-component table-description"
                    id={ `table-description-${index}` }
                  >
                    { description }
                  </td>

                  <td
                    className="table-component table-tag"
                    id={ `table-tag-${index}` }
                  >
                    { tag }
                  </td>

                  <td
                    className="table-component table-method"
                    id={ `table-method-${index}` }
                  >
                    { method }
                  </td>

                  <td
                    className="table-component table-field"
                    id={ `table-field-${index}` }
                  >
                    { parseFloat(value).toFixed(2) }
                  </td>

                  <td
                    className="table-component table-currency"
                    id={ `table-currency-${index}` }
                  >
                    { exchangeRates[currency].name }
                  </td>

                  <td
                    className="table-component table-id"
                    id={ `table-id-${index}` }
                  >
                    { parseFloat(exchangeRates[currency].ask).toFixed(2) }
                  </td>

                  <td
                    className="table-component table-id"
                    id={ `table-id-${index}` }
                  >
                    { (value * exchangeRates[currency].ask).toFixed(2) }
                  </td>

                  <td
                    className="table-component table-id"
                    id={ `table-id-${index}` }
                  >
                    BRL
                  </td>

                  <td
                    className="table-component table-tag"
                    id={ `table-tag-${index}` }
                  >
                    <button
                      type="button"
                    >
                      REMOVER DISPESA
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (/* dispatch */) => ({

});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
