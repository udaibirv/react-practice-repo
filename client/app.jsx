import React, { useState } from 'react';
import Home from './pages/home';

const App = props => {
  const [state, setState] = useState({
    england: [],
    season: ''
  });

  const getEngalndInfo = info => {
    setState({ england: info });
  };

  const content = (

    <h1>Hello</h1>
  );

  return content;

};

export default App;
