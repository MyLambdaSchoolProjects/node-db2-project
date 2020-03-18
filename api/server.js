const express = require('express');
const helmet = require('helmet');

const dealerRouter = require('../data/dealerRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dealer', dealerRouter);

module.exports = server;