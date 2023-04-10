import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '../pages/NotFoundPage/ErrorPage';

describe('ErrorPage', () => {
  it('displays the error image and a link to go back home', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const errorImg = screen.getByAltText('error');
    expect(errorImg).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Back to home' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
