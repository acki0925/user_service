const binanceEndpoints = require('./binance-endpoints');

module.exports = class TradingBot {
  // Method
  strategyType = async (type) => {
    const strategyCandle = () => 'It is a candle bot signal';
    const strategyCrypton = () => 'It is a crypton bot signal';
    const strategyAce = () => {
      console.log("It is a Ace bot signal");

      await binanceEndpoints.NewOrder({
        symbol: 'BTCUSDT',
        side: 'BUY',
        type: 'LIMIT',
        quantity: '0.001',
        price: '10100',
        timestamp: Date.now(),
        timeInForce: 'GTC'
      });
    };
    const strategyMiak = () => "It is a Miak bot signal";
    const strategyPamet = () => "It is a Pamet bot signal";

    const editors = {
      Candle: strategyCandle,
      Crypton: strategyCrypton,
      Ace: strategyAce,
      Miak: strategyMiak,
      Pamet: strategyPamet,
      default: () => 'unknown'
    };
    return (editors[type] || editors.default)();
  }
}
