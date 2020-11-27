const binanceConfig = {
    API_KEY: 'qz819Hq7hJKr2KFbq8Clufo5nG6Wx2OezsfxgSlIpdjXkqO1XxxYXWUZXokBVQiz',
    API_SECRET: 'lzNVBipOkPpMtUflGTwxX2xbAh0leFXpG7A5HIdXvnsnjHFJMAhwl2UpQMUMIaRQ',
    HOST_URL: 'https://api.binance.com',
  };

  const buildSign = (data, config) => {
    return crypto.createHmac('sha256', config.API_SECRET).update(data).digest('hex');
  };


  const privateRequest = async (data, endPoint, type) => {
    const dataQueryString = qs.stringify(data);
    const signature = buildSign(dataQueryString, binanceConfig);
    const requestConfig = {
      method: type,
      url: binanceConfig.HOST_URL + endPoint + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': binanceConfig.API_KEY
      },
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response);
      return response;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  };

  let data = {
    symbol: 'BTCUSDT',
    side: 'BUY',
    type: 'LIMIT',
    quantity: '0.1',
    price: '10100',
    timestamp: Date.now(),
    timeInForce: 'GTC'
  }

  privateRequest(data, '/api/v3/order', 'POST');