import React, { useEffect, useState } from 'react';

const TeamRoster = () => {

  const [club, setPlayers] = useState([]);

  const getRoster = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/team-roster', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const scorerTable = table.map((club, key) => {
          return club;
        });
        console.log(scorerTable);
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
              club.players.map((player, j) => {
                return (
              <div key={j}>
                <h1>{player.name}</h1>
              </div>

                );
              })

            );
          })
        }
      </>
    </div>

  );

};

export default TeamRoster;
