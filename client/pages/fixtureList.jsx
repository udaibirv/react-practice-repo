import React, { useState, useEffect } from 'react';

const FixtureList = () => {

  const [venue, setVenue] = useState('');
  const [score, setScore] = useState({
    home: '',
    away: ''
  });

  const getSchedule = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('/api/league-fixtures/england', requestOptions)
      .then(response => response.json())
      .then(data => {
        const info = data.response[0].score.fulltime.home;
        const infoAway = data.response[0].score.fulltime.away;
        setScore({ ...score, home: info, away: infoAway });
      });

    // const result = info.map((data, j) => {
    //   return data.score.fulltime;
    // });
    // result.map((info, j) => {
    //   return (
    //     setScore({ ...score, home: info.home, away: info.away })
    //   );
    // });

  };

  useEffect(() => {
    getSchedule();
  }, [setVenue, setScore]);

  return (
    <h1>Home: {score.home} Away: {score.away}</h1>
  );
};

export default FixtureList;
