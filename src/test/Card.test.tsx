import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../components/card/Card';

const card = {
  id: 1,
  name: 'Vapor',
  description: 'test',
  thumbnail: '123.jpg',
};

describe('checking h2 inner in Card', () => {
  it('Card', () => {
    render(<Card {...card} onOpen={() => {}} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Vapor');
  });
});
