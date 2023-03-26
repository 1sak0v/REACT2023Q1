import { render, screen } from '@testing-library/react';
import FormPage from '../components/formPage/FormPage';

describe('MainPage', () => {
  test('renders main page with title and card list', () => {
    render(<FormPage />);

    const formPageTitle = screen.getByText(/Form/i);
    expect(formPageTitle).toBeInTheDocument();

    const profileList = screen.getByRole('list');
    expect(profileList).toBeInTheDocument();
  });
});
