import { render } from '@testing-library/react';
import AboutPage from '../components/aboutPage/AboutPage';

describe('AboutPage', () => {
  it('renders the title', () => {
    const { getByText } = render(<AboutPage />);

    const title = getByText('About page');

    expect(title).toBeInTheDocument();
  });
});
