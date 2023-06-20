import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header.', () => {
  const result = render(<MemoryRouter><App /></MemoryRouter>);
  expect(result.container.querySelector('#my-header')).toBeInTheDocument; 
});

test('renders footer.', () => {
  const result = render(<MemoryRouter><App /></MemoryRouter>);
  expect(result.container.querySelector('#my-footer')).toBeInTheDocument; 
});