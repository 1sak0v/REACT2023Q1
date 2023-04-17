import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage/FormPage';
import { Provider } from 'react-redux';
import store from '../store';

describe('FormPage', () => {
  test('renders main page with title and card list', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    const formPageTitle = screen.getByText(/Form/i);
    expect(formPageTitle).toBeInTheDocument();

    const profileList = screen.getByRole('list');
    expect(profileList).toBeInTheDocument();
  });
});
