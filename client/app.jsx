import React, { useState, useEffect } from 'react';
import Home from './pages/home';

const App = () => {
  const [club, setTeam] = useState([]);

  const fetchData2018 = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/leauge-info/england/2018', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const leagueTable = data.response[0].league.standings[0];
        setTeam(leagueTable);
      });

  };

  const fetchData2020 = () => {
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
  };

  useEffect(() => {
    fetchData2020();

  }, [setTeam]);

  return (

    <div>
      <button className="england-button btn btn-sm" onClick={fetchData2018}>18/19</button>
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
