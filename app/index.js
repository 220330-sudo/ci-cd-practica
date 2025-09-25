const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde CI/CD en Ubuntu!');
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
