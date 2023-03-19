import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import data from '../data/data';
import Card from '../components/card/Card';

const card = data[0];

describe('checking h2 inner in Card', () => {
  it('Card', () => {
    render(<Card {...card} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Vapor');
  });
});
