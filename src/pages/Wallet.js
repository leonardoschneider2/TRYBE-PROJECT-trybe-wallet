import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, field, currencyField } = this.props;
    return (
      <main className="wallet">
        <Header
          email={ email }
          field={ field }
          currencyField={ currencyField }
        />
        <WalletForm />
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  field: store.wallet.field,
  currencyField: store.wallet.currencyField,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  field: PropTypes.number.isRequired,
  currencyField: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
