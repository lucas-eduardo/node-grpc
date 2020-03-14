const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { resolve } = require('path');

const loadConfig = require('../config/proto');

const hidraDef = protoLoader.loadSync(
  resolve(__dirname, '..', 'contract', 'user.proto'),
  loadConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

const hidraClient = new hidra.UserService('localhost:3334', grpc.credentials.createInsecure());

module.exports = hidraClient;