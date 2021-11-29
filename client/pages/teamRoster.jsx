import React, { useEffect, useState } from 'react';

const TeamRoster = () => {

  const [club, setPlayers] = useState([]);

  const getRoster = () => {
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

        setPlayers(scorerTable);

      });
  };

  useEffect(() => {
    getRoster();

  }, [setPlayers]);

  return (
      <div>
      <>
        {
          club.map((club, key) => {
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

export default TeamRoster;
