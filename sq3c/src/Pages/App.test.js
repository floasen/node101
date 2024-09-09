import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders home page on default route', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const homeElement = screen.getByText(/Willkommen zum Wiss-Quiz/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders quiz page on /quiz route', () => {
  window.history.pushState({}, 'Quiz Test', '/quiz');
  
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const quizElement = screen.getByText(/Was ist eine Frucht?/i);
  expect(quizElement).toBeInTheDocument();
});

test('renders rules page on /rules route', () => {
  window.history.pushState({}, 'Rules Test', '/rules');
  
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const rulesElement = screen.getByText(/Spielregeln/i);
  expect(rulesElement).toBeInTheDocument();
});

test('renders 404 page on unknown route', () => {
  window.history.pushState({}, '404 Test', '/random');
  
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const notFoundElement = screen.getByText(/404 - Seite nicht gefunden/i);
  expect(notFoundElement).toBeInTheDocument();
});
