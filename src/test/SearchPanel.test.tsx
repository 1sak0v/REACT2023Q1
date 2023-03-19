import { render, fireEvent } from '@testing-library/react';
import SearchPanel from '../components/searchPanel/SearchPanel';

describe('SearchPanel', () => {
  it('updates search input on change', () => {
    const { getByPlaceholderText } = render(<SearchPanel />);

    const inputEl = getByPlaceholderText('Search...');
    const value = 'test test';

    fireEvent.change(inputEl, { target: { value: value } });

    expect(inputEl).toHaveValue(value);
  });
});
