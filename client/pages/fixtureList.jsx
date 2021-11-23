import React, { useState, useEffect } from 'react';

const FixtureList = () => {

  const [player, setPlayer] = useState([]);

  const fetchData2021 = () => {
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
        console.log(scorerTable);
        setPlayer(scorerTable);

      });
  };

  useEffect(() => {
    fetchData2021();

  }, [setPlayer]);

  return (

    <div>

      {
        player.map((first, key) => {
          return (
            <>

              <h1 key={key}>{first.player.name } - {first.statistics[0].team.name} / {first.statistics[0].games.appearences} Appereances</h1>

              <li key={key}>{first.statistics[0].goals.total} goals</li>
              <li key={key}>{first.statistics[0].shots.on} shots on target</li>
              <li key={key}>{first.statistics[0].goals.assists} Assists</li>
              <img key={key} src={first.player.photo}></img>

            </>
          );

        })
      }
    </div>
  );
};

export default FixtureList;
