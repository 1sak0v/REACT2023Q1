import { render } from '@testing-library/react';

import data from '../data/data';
import CardList from '../components/cardList/CardList';

describe('CardList', () => {
  it('renders a list of cards', () => {
    const { getAllByRole } = render(<CardList />);
    const cardElements = getAllByRole('listitem');
    expect(cardElements).toHaveLength(data.length);
  });
});
