const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Dummy Cricket Players Data
const players = [
  {
    id: 1,
    name: 'Virat Kohli',
    country: 'India',
    role: 'Batsman',
    runs: 12000,
    wickets: 4,
  },
  {
    id: 2,
    name: 'James Anderson',
    country: 'England',
    role: 'Bowler',
    runs: 1243,
    wickets: 600,
  },
  {
    id: 3,
    name: 'Kane Williamson',
    country: 'New Zealand',
    role: 'Batsman',
    runs: 7000,
    wickets: 29,
  },
  {
    id: 4,
    name: 'Pat Cummins',
    country: 'Australia',
    role: 'Bowler',
    runs: 750,
    wickets: 250,
  },
  {
    id: 5,
    name: 'Ben Stokes',
    country: 'England',
    role: 'All-rounder',
    runs: 4500,
    wickets: 150,
  },
];

// Middleware
app.use(cors());
app.use(express.json());

// Exercise 2: Get all players
app.get('/players', (req, res) => {
  res.json({ players });
});

// Exercise 3: Get player by ID
app.get('/players/:id', (req, res) => {
  const playerId = parseInt(req.params.id);
  const player = players.find((p) => p.id === playerId);

  if (player) {
    res.json({ player });
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
