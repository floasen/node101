import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'; 
import GameSession from './pages/SpielAnsicht';
import Impressum from './pages/Impressum';
import Spielregeln from './pages/Spielregeln';
import NotFound from './pages/NotFound';
import GlobalNavigation from './components/GlobalNavigation';
import GameSession from './GameSession';

function Layout() {
  return (
    <div className="App">
      <div className="content">
        <header className="App-header">
          <h1>Willkommen zum Wiss-Quiz</h1>
          <hr />
          <Outlet />
          <hr />
        </header>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<GameSession />} />
        <Route path="rules" element={<Spielregeln />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
    return (
      <div className="App">
        <GlobalNavigation /> 
        <div className="content">
          <header className="App-header">
            <h1>Willkommen zum Wiss-Quiz</h1>
            <hr />
            <Outlet /> 
            <hr />
          </header>
        </div>
      </div>
    );
  }

  function App() {
    return (
      <div className="App">
        <h1>Wiss-Quiz</h1>
        <GameSession questions={questions} />
      </div>
    );
  }
  

export default App;