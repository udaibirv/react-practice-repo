import React, { useState, useEffect } from 'react';
const apiCalls = () => {
  const [club, setTeam] = useState([]);
  const [season, setSeason] = useState('');

  const fetchData2018 = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/leauge-info/england/2018', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const currentSeason = data.response[0].league.season;
        const leagueTable = data.response[0].league.standings[0];
        setTeam(leagueTable);
        setSeason(currentSeason);
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
        const currentSeason = data.response[0].league.season;
        const leagueTable = data.response[0].league.standings[0];
        setTeam(leagueTable);
        setSeason(currentSeason);
      });
  };

  const fetchData2021 = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/leauge-info/england/2021', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const currentSeason = data.response[0].league.season;
        const leagueTable = data.response[0].league.standings[0];
        setTeam(leagueTable);
        setSeason(currentSeason);
      });
  };

  useEffect(() => {
    fetchData2020();

  }, [setTeam, setSeason]);

  return (

    <div>
      <button className="england-button btn btn-sm" onClick={fetchData2018}>18/19</button>
      <button className="england-button btn btn-sm" onClick={fetchData2021}>21/22</button>
      <h1> Season: {season}</h1>
      {
        club.map((teamName, key) => {
          return (
            <>

            <h3 key={key}> {teamName.team.name}</h3>

            </>
          );
        })
      }
    </div>
  );
};
export default apiCalls;
