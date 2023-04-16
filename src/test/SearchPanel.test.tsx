import { render, fireEvent } from '@testing-library/react';
import SearchPanel from '../components/searchPanel/SearchPanel';
import { Provider } from 'react-redux';
import store from '../store';

describe('SearchPanel', () => {
  it('updates search input on change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchPanel />
      </Provider>
    );

    const inputEl = getByPlaceholderText('Search...');
    const value = 'test test';

    fireEvent.change(inputEl, { target: { value: value } });

    expect(inputEl).toHaveValue(value);
  });
});
