import { describe, it } from 'vitest';

import Button from './components/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button text={"Button Text"} color={"bg-darkGrey"} textColor={"text-black"}/>);

    screen.debug();
  });
});