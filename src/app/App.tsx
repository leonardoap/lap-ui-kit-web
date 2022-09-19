import React from 'react';
import AppRoutes, { routes } from "../Routes";

import logo from '../img/logo.svg';

import '../app/App.css';

function App() {
  return (
    <div className="App">
      <div className='Row'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            LAP UI KIT
          </p>
          <div className='Column'>
            {
              routes.map((route, idx) => {
                return (<a
                  key={idx}
                  className="App-link"
                  href={route.path}
                  rel="noopener noreferrer"
                >
                  {route.name}
                </a>);
              })
            }
          </div>
        </header>
        <div className='Column'>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
