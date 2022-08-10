import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/index'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('Fazendo teste na aplicação TrybeWallet: ', () => {
  test('testando o wallet a partir do app:', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const password = screen.getByLabelText(/senha:/i);
    const email = screen.getByRole('textbox', { name: /email:/i });
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'caralho@borracha.com');
    userEvent.type(password, 'caralhoborracha');
    userEvent.click(button);

    // screen.logTestingPlaygroundURL()
  })
});
