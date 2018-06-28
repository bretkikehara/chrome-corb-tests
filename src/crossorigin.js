const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8081;

function getHeaders(headers) {
  const he = {};
  Object.keys(headers || {}).forEach((key) => {
    he[key.toLowerCase()] = headers[key];
  });
  return he;
}

app.get('/', (req, res) => {
  const opts = JSON.parse(req.query.opts);
  const headers = getHeaders(opts.headers);
  res.set(headers);
  // res.type(headers['content-type']);
  // res.status(headers['status']);
  switch (opts.body) {
    case 'empty':
      res.end();  
      return;
    case 'png':
      res.sendFile(path.resolve(__dirname, '..', 'static', '1x1.png'));
      return;
    default:
      res.sendFile(path.resolve(__dirname, '..', 'static', 'resp.html'));
  }
});

app.listen(PORT, () => console.log(`Cross Origin listening on port ${PORT}!`));
