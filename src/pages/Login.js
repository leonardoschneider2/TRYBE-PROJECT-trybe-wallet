import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dispatchEmailToStore from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const valueButton = this.disabledChange();
      this.setState({
        disabled: valueButton,
      });
    });
  }

  disabledChange = () => {
    const passLen = 6;
    const com = 4;
    const { email, password } = this.state;
    if (
      password.length >= passLen
      && !email.includes(' ')
      && email.includes('@')
      && email.split('@')[0].length > 0
      && email.split('@')[1].length > com
      && email.slice(email.length - com) === '.com'
    ) {
      return false;
    } return true;
  }

  callDispatch = () => {
    const { email } = this.state;
    const { dispatchEmail, history } = this.props;
    dispatchEmail(email);
    history.push('carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="login">
        <form className="login-form">
          <label className="login-label" htmlFor="login-email">
            EMAIL:
            <input
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              id="login-email"
              className="login-email"
              type="email"
            />
          </label>
          <label className="login-label" htmlFor="login-password">
            SENHA:
            <input
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              id="login-password"
              className="login-password"
              type="password"
            />
          </label>
          <button
            type="submit"
            onClick={ this.callDispatch }
            disabled={ disabled }
          >
            ENVIAR
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(dispatchEmailToStore(email)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

// Falta agora somente fazer o path mudar com history.push e mandar info por mapDispatchToProps
