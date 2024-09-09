import React from 'react';
import { Link } from 'react-router-dom';

function GlobalNavigation() {
  return React.createElement(
    'nav',
    null,
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, React.createElement(Link, { to: '/' }, 'Home')),
      React.createElement('li', null, React.createElement(Link, { to: '/quiz' }, 'Quiz')),
      React.createElement('li', null, React.createElement(Link, { to: '/rules' }, 'Regeln')),
      React.createElement('li', null, React.createElement(Link, { to: '/impressum' }, 'Über uns'))
    )
  );
}

export default GlobalNavigation;