const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const sequelize = require('./models/domain/db');
const errorHandler = require('./error/middlewareErrorHandler');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
//app.use(errorHandler);


const start = async () => {
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  } catch(err) {
    console.log(err);
  }
};

start();