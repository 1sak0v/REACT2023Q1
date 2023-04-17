import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/app/App';
import { Provider } from 'react-redux';
import store from '../store';

describe('App component', () => {
  it('renders the MainPage component on the root URL', async () => {
    const { getByText } = await act(async () =>
      render(
        <MemoryRouter initialEntries={['/']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      )
    );

    const textElement = getByText('Home page');
    expect(textElement).toBeInTheDocument();
  });
});
