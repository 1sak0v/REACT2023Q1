import { render, screen } from '@testing-library/react';
import MainPage from '../pages/MainPage/MainPage';

describe('MainPage', () => {
  test('renders main page with title and card list', () => {
    render(<MainPage />);

    const mainPageTitle = screen.getByText(/Home page/i);
    expect(mainPageTitle).toBeInTheDocument();

    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
