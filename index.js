const express = require('express');
const morgan = require('morgan');
const { orWhereNotExists } = require('./data/dbConfig');
const logger = require('./middleware/logger')
const usersRouter = require('./users/userRouter')

server = express();
server.use(express.json());
// server.use(morgan('combined'));
// server.use((req, res, next) => {
//   const time = new Date().toISOString()
//   console.log(`[${time}] ${req.method} ${req.url}`);
//   next()
// })
server.use(logger)

const port = 5000;


server.get('/', (req, res) => {
  res.send('<h2>Server running!</h2>')
})

server.use(usersRouter)


server.listen(port, () => {
  console.log(`server listening on port ${port}`);
})