const express = require('express');
const app = express();
require('dotenv/config');
const port = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('../routes/user.routes');
require('../dataBase/connectionDb');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
