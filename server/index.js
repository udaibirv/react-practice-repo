require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const request = require('request');

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

app.get('/api/leauge-info/england-games', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/fixtures/headtohead?h2h=49-52&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2020',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2018', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2018',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/leauge-info/england/2021', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/standings?league=39&season=2021',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );

});

app.get('/api/league-fixtures/england', (req, res) => {
  let date;
  request(
    {
      url: `https://v3.football.api-sports.io/fixtures?league=39&season=2021&date=${date}`,
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/api/england-top-scorers/2021', (req, res) => {
  request(
    {
      url: 'https://v3.football.api-sports.io/players/topscorers?season=2021&league=39',
      headers: {
        'x-apisports-key': '55079badf90d509b71c69c823d5f377e',
        'Content-Type': 'application/json'
      }
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
