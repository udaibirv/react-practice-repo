import React, { useEffect, useState } from 'react';

const TeamRoster = () => {

  const [players, setPlayers] = useState([]);

  const getRoster = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/team-roster', requestOptions)
      .then(response => response.json())
      .then(data => {
        const teams = data.response;
        const teamInfo = teams.map((club, key) => {
          return club;

        });
        console.log(teamInfo);

        setPlayers(teamInfo);
      });
  };

  useEffect(() => {
    getRoster();

  }, [setPlayers]);

  return (
    <h1>Hello</h1>
  );

};

export default TeamRoster;
