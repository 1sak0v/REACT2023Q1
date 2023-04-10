import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header/Header';

describe('Header', () => {
  test('activates current link when navigating to it', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveClass('nav__link_active');

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).not.toHaveClass('nav__link_active');
  });
});
