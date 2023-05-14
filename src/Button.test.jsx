import { describe, it, expect } from 'vitest';

import Button from './components/Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('renders a button with text', () => {
    render(<Button buttonText={"Text"} />)
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});