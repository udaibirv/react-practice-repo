import React, { useState, useEffect } from 'react';
import Home from './pages/home';

const App = props => {
  const [state, setState] = useState({
    england: [],
    season: ''
  });

  const getEngalndInfo = info => {
    setState({ england: info });
  };

  useEffect(() => {
    fetch('/api/leauge-info/england')
      .then(response => {
        return response.json();
      })
      .then(result => {
        const table = result.response[0].league.standings;
        table.map((club, index) => {
          return (
            setState({ england: club, season: '16/17' })
          );
        });

      });
  });
  const content = (

    <h1>Hello</h1>
  );

  return content;

};

export default App;
