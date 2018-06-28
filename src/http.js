const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'static', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
