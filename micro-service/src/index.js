const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { resolve } = require('path');

const implementation = require('./implementetion');

const packageDefinition = protoLoader.loadSync(
  resolve(__dirname, 'contract', 'user.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);

const proto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());

server.start();