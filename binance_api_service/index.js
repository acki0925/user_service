const axios = require('axios');
const pjs = require('./package.json');
const { name, version } = pjs;
const http = require('http');
const express = require('express');
const Binance = require('node-binance-api');
const app = express();
const BinanceBot = require('./bot');
const binanceApiRouter = require('./routers/binance-api')

const server = http.createServer(app);

// Important - a service should not have a fixed port but should randomly choose one
server.listen(0);

app.use(express.static('public'));
app.use(express.json())
app.use(BinanceBot)
app.use(binanceApiRouter)

server.on('listening', () => {
    
    const registerService = () => axios.put(`http://localhost:3000/register/${name}/${version}/${server.address().port}`);
    const unregisterService = () => axios.delete(`http://localhost:3000/unregister/${name}/${version}/${server.address().port}`);
  
    registerService();
  
    const interval = setInterval(registerService, 20000);
    const cleanup = async () => {
      clearInterval(interval);
      await unregisterService();
    };
  
    process.on('uncaughtException', async () => {
      await cleanup();
      process.exit(0);
    });
  
    process.on('SIGINT', async () => {
      await cleanup();
      process.exit(0);
    });
  
    process.on('SIGTERM', async () => {
      await cleanup();
      process.exit(0);
    });
  
    console.log(`Hi there! I'm listening on port ${server.address().port}`);
  });