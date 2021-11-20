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

      <h1> Season: </h1>
      {
        player.map((first, key) => {
          return (
            <>

              <li>{first.player.name }</li>
              <li>{first.statistics[0].goals.total} goals</li>

            </>
          );

        })
      }
    </div>
  );
};

export default FixtureList;
