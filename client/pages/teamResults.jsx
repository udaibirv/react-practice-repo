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
                <h1>{club.fixture.date.charat}</h1>
                <h1>{club.fixture.venue.name}</h1>
                <h1>{club.teams.home.name}</h1>
                <h1>{club.teams.away.name}</h1>
              </div>
            // <h1 key={key}>{club.fixture.venue.name}</h1>

            );
          })
        }
      </>
    </div>
  );
};

export default TeamResults;
