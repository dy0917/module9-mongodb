const express = require('express');
require('./db');
const userRoute = require('./routes/userRoute');
require('dotenv').config();
console.log(process.env.KEY);
console.log(process.env.ENV);
const app = express();
app.use(express.json());
const port = 3000;

app.use('/api/user', userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
