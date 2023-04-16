import { act, render, screen } from '@testing-library/react';
import MainPage from '../pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from '../store';

describe('MainPage', () => {
  test('renders main page with title and card list', async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <MainPage />
        </Provider>
      )
    );

    const mainPageTitle = screen.getByText(/Home page/i);
    expect(mainPageTitle).toBeInTheDocument();
  });
});
