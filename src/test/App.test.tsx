import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/app/App';

describe('App component', () => {
  it('renders the MainPage component on the root URL', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const textElement = getByText('Home page');
    expect(textElement).toBeInTheDocument();
  });
});
