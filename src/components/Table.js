import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      expenses.map((expense, index) => {
        const { value, description, currency, method, tag, id } = expense;
        return (
          <div
            className="table-expense"
            key={ `expense-${index}` }
          >

            <div
              className="table-component table-id"
              id={ `table-id-${index}` }
            >
              <span>NÚMERO DO IDENTIFICADOR: </span>
              <span>{ id }</span>
            </div>

            <div
              className="table-component table-field"
              id={ `table-field-${index}` }
            >
              <span>VALOR DA DESPESA: </span>
              <span>{ value }</span>
            </div>

            <div
              className="table-component table-description"
              id={ `table-description-${index}` }
            >
              <span>DESCRIÇÃO: </span>
              <span>{ description }</span>
            </div>

            <div
              className="table-component table-currency"
              id={ `table-currency-${index}` }
            >
              <span>MOEDA: </span>
              <span>{ currency }</span>
            </div>

            <div
              className="table-component table-method"
              id={ `table-method-${index}` }
            >
              <span>MÉTODO DE PAGAMENTO: </span>
              <span>{ method }</span>
            </div>

            <div
              className="table-component table-tag"
              id={ `table-tag-${index}` }
            >
              <span>tag: </span>
              <span>{ tag }</span>
            </div>
            <div
              className="table-component table-tag"
              id={ `table-tag-${index}` }
            >
              <button
                type="button"
              >
                REMOVER DISPESA
              </button>
            </div>
          </div>
        );
      })
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (/* dispatch */) => ({

});

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
