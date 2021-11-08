import React, { useState, useEffect } from 'react';
import Home from './pages/home';

const App = () => {
  const [club, setTeam] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const leagueTable = data.response[0].league.standings[0];
        setTeam(leagueTable);
      });

  }, [setTeam]);

  return (

    <div>
      {
        club.map((teamName, key) => {
          return (
            <>
            <h1 key={key}>{teamName.team.name}</h1>

            </>
          );
        })
      }
    </div>
  );
};
export default App;
