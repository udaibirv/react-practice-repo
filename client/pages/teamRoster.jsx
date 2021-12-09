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

        setPlayers(scorerTable);

      });
  };

  useEffect(() => {
    getRoster();

  }, [setPlayers]);

  return (
      <div>
      <>

      <div className="table col-lg- col-md col-sm  table-border">
                <thead>
                  <tr>
                    <th scope="row">Player</th>
                    <th scope="row">Position</th>
                    <th scope ="row">Age</th>
                    <th scoe="row">Number</th>
                  </tr>
                </thead>
                <tbody>

        {
          club.map((club, key) => {
            return (
              club.players.map((player, j) => {
                return (
                  <tr key={key} scope="col">
                    <td scope="col">{player.name}
                      <img src={player.photo} />
                      </td>
                    <td scope="col">{player.position}</td>
                    <td scope="col">{player.age}</td>
                    <td scope="col">{player.number}</td>
                  </tr>
                );
              })

            );
          })
        }
      </tbody>
      </div>
      </>
    </div>

  );

};

export default TeamRoster;
