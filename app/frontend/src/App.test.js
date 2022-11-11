import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('render Subscribe Zainkeeps code text', () => {
  render(<App />);
  const TextElement = screen.getByText(/Subscribe Zainkeeps code/);
  expect(TextElement).toBeInTheDocument();
});
