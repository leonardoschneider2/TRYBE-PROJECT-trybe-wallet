import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, field, currencyField } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ field }</span>
        <span data-testid="header-currency-field">{ currencyField }</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  field: PropTypes.number,
  currencyField: PropTypes.string,
}.isRequired;

export default Header;
