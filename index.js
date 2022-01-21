const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Mi server express');
});

routerAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}/`);
});
