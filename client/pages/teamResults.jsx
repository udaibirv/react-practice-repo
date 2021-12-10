import React, { useState, useEffect } from 'react';

const TeamResults = () => {
  const [scorer, setScorer] = useState([]);
  // const [season, setSeason] = useState([]);

  const headToHead = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('/api/england-top-scorers/2021', requestOptions)
      .then(response => response.json())
      .then(data => {
        const table = data.response;
        const scorerTable = table.map((club, key) => {
          return club;
        });
        setScorer(scorerTable);

      });
  };

  useEffect(() => {
    headToHead();

  }, [setScorer]);

  return (
    <div className="table table-responsive">
      <div className='header'>
        <h1>Top Scorers 21/22 Season</h1>
      </div>
      <thead>
              <tr>
                <th scope="col">Player</th>
                <th scope="col">Club</th>
                <th scope="col">Apps</th>
                <th scope="col">Goals</th>
              </tr>
            </thead>
            <tbody>

        {
          scorer.map((club, key) => {
            return (
              <tr scope="row" key={key}>
                <td>{club.player.name}
                    <img src={club.player.photo}/>
                </td>
                <td> {club.statistics[0].team.name} </td>
                <td>{club.statistics[0].games.appearences}</td>
                <td> {club.statistics[0].goals.total} </td>
              </tr>

            );
          })
        }

        </tbody>
    </div>
  );
};

export default TeamResults;
