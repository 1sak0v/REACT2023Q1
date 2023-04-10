import { render } from '@testing-library/react';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

describe('ErrorMessage component', () => {
  it('should render the error message and image', () => {
    const { getByText, getByAltText } = render(<ErrorMessage />);
    const errorMessage = getByText('Some error, please repeat your request');
    const errorImage = getByAltText('error');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('font-size: 24px');
    expect(errorImage).toBeInTheDocument();
  });
});
