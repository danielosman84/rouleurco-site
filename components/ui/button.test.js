import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  test('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeTruthy();
  });

  test('applies provided className', () => {
    const { container } = render(<Button className="test-class">Ok</Button>);
    expect(container.firstChild.className.includes('test-class')).toBe(true);
  });
});
