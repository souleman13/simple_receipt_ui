import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Receipt UI/i);
  expect(linkElement).toBeInTheDocument();
});

//I want to provide more tests here but without the api endpoint working I have no unreliable piece of the application to test.
//The above test simple ensure the header loads