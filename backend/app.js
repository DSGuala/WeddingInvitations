const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hola capa. Te quiero mucho. Nos casamos el 3 de Mayo?');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
