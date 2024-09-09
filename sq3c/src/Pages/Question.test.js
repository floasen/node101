import { render, screen } from '@testing-library/react';
import FrageAnzeige from './components/FrageAnzeige';

test('renders question and answers', () => {
  render(<FrageAnzeige />);

  const questionElement = screen.getByText(/Was ist eine Frucht?/i);
  expect(questionElement).toBeInTheDocument();

  const answerOne = screen.getByText(/Apfel/i);
  const answerTwo = screen.getByText(/Brot/i);
  const answerThree = screen.getByText(/Stein/i);

  expect(answerOne).toBeInTheDocument();
  expect(answerTwo).toBeInTheDocument();
  expect(answerThree).toBeInTheDocument();
});