import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { INITIAL_STATE, mockData } from './helpers/mockData';
import WalletForm from '../components/WalletForm';

describe('Fazendo teste na aplicação TrybeWallet: ', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('componentes da Wallet', () => {
    renderWithRedux(<Wallet />, { initialState: INITIAL_STATE });

    const value = screen.getByRole('spinbutton');
    const description = screen.getByRole('textbox');
    screen.getAllByRole('combobox')[0];
    screen.getAllByRole('combobox')[1];
    screen.getAllByRole('combobox')[2];
    const button = screen.getByRole('button', { name: /adicionar despesa/i });

    // expect(value.value).toBe('0');
    // expect(description.value).toBe('');
    // expect(currencies.value).toBe('USD');

    userEvent.type(value, '100');
    userEvent.type(description, 'an big rice package');
    userEvent.click(button);
    
    // screen.logTestingPlaygroundURL()
  })

  test('tentando mockar a fetch:', async () => {
    renderWithRouterAndRedux(<WalletForm />);
    expect(global.fetch)
      .toBeCalledWith('https://economia.awesomeapi.com.br/json/all');
  })
});

