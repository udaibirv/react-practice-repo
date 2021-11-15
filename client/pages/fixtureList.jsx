import React, { useState, useEffect } from 'react';

const FixtureList = () => {

  const [venue, setVenue] = useState('');

  const getSchedule = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/league-fixtures/england', requestOptions)
      .then(response => response.json())
      .then(data => {
        const info = data.response;
        const leagueInfo = info.map((team, key) => {
          return team.fixture.venue.name;
        });
        setVenue(leagueInfo);

      });
  };

  useEffect(() => {
    getSchedule();
  }, [setVenue]);

  return (
    <div>
    <h1>Home Venues for 10/30 fixtures</h1>

    <ol>
      <li>{venue}</li>
    </ol>
  </div>
  );
};

export default FixtureList;
