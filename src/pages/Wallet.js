import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>{ email }</div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

const mapDispatchToProps = () => ({

});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
