import React, { useState, useEffect } from 'react';

const TeamResults = () => {
  const [scorer, setScorer] = useState([]);
  const [season, setSeason] = useState([]);

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
        setSeason(scorerTable.season);

      });
  };

  useEffect(() => {
    headToHead();

  }, [setScorer, setSeason]);

  return (
    <div>
      <>
        {
          scorer.map((club, key) => {
            return (

                <h1 key={key}> Fixture Date: {club.statistics[0].goals.total}</h1>

            );
          })
        }
      </>
    </div>
  );
};

export default TeamResults;
