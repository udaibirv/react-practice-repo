import React, { useState, useEffect } from 'react';

const TeamResults = () => {
  const [team, setTeam] = useState([]);

  const headToHead = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/leauge-info/england-games', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const scorerTable = table.map((club, key) => {
          return club;
        });
        console.log(scorerTable);
        setTeam(scorerTable);

      });
  };

  useEffect(() => {
    headToHead();

  }, [setTeam]);

  return (
    <div>
      <>
        {
          team.map((club, key) => {
            return (
              <div key={key}>
                <h1> Fixture Date: {club.fixture.date.slice(0, 10)}</h1>
                <h1> Venue: {club.fixture.venue.name}</h1>
                <img src={club.teams.home.logo}></img>
                <h1> Home: {club.teams.home.name} - {club.goals.home}
                </h1>
                <img src={club.teams.away.logo}></img>
                <h1> Away: {club.teams.away.name} - {club.goals.away}

                </h1>

              </div>

            );
          })
        }
      </>
    </div>
  );
};

export default TeamResults;
