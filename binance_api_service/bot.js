const binanceEndpoints = require('./services/binance-endpoints');
const { binanceConfig } = require('./binance-authentication');
const TB = require('./services/tradingbot');

(async () => {

  // await binanceEndpoints.klines({ symbol: 'BTCUSDT', limit: 1, interval: '1h' });

  // await binanceEndpoints.NewOrder({
  //   symbol: 'BTCUSDT',
  //   side: 'BUY',
  //   type: 'LIMIT',
  //   quantity: '0.001',
  //   price: '10100',
  //   timestamp: Date.now(),
  //   timeInForce: 'GTC'
  // });

  // await binanceEndpoints.QueryOrder({ symbol: 'BTCUSDT', orderId: 3177874542, timestamp: Date.now() })

  // await binanceEndpoints.CancelOrder({symbol: 'BTCUSDT', orderId: 3177920516, timestamp: Date.now()})

  // await binanceEndpoints.CancelAllOpenOrderSymbol({ symbol: 'BTCUSDT', timestamp: Date.now() })

  // await binanceEndpoints.CurrentOrder({ symbol: 'BTCUSDT', timestamp: Date.now() })

  // await binanceEndpoints.AllOrder({symbol: 'BTCUSDT', timestamp: Date.now()})

  const trade = new TB;
  const signal_type = "Ace";
  const order_type = "BUY/SELL";
  const pair = "BTCUSDT";

  const bot = await trade.strategyType(signal_type);
  console.log(bot)

})();