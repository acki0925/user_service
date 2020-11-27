const axios = require('axios');
const qs = require('qs');
const BinanceAuthentication = require('../binance-authentication');

// Required URLS
const BASEURL = 'https://api.binance.com';
const CANDLESTICK_ENDPOINT = '/api/v3/klines';
const NEW_ORDER_ENDPOINT = '/api/v3/order';
const QUERY_ORDER_ENDPOINT = '/api/v3/order';
const CANCEL_ORDER_ENDPOINT = '/api/v3/order';
const CANCEL_OPEN_ORDER_ENDPOINT_SYMBOL = '/api/v3/openOrders';
const CURRENT_OPEN_ORDER = '/api/v3/openOrders';
const GET_ALL_ORDERS = '/api/v3/allOrders';

const BinanceRest = {
  klines: async (inputData) => {
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object based
    const requestConfig = {
      method: 'GET',
      url: BASEURL + CANDLESTICK_ENDPOINT + '?' + dataQueryString
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  NewOrder: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData);
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'POST',
      url: BASEURL + NEW_ORDER_ENDPOINT + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      },
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  },
  QueryOrder: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object 
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'GET',
      url: BASEURL + QUERY_ORDER_ENDPOINT + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      }
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  CancelOrder: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object 
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'DELETE',
      url: BASEURL + CANCEL_ORDER_ENDPOINT + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      }
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  CancelAllOpenOrderSymbol: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object 
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'DELETE',
      url: BASEURL + CANCEL_OPEN_ORDER_ENDPOINT_SYMBOL + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      }
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  CurrentOrder: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object 
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'GET',
      url: BASEURL + CURRENT_OPEN_ORDER + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      }
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  AllOrder: async (inputData) => {
    console.log(inputData)
    const dataQueryString = qs.stringify(inputData); // stringfy bcoz data is object 
    const signature = BinanceAuthentication.buildSign(dataQueryString, BinanceAuthentication.binanceConfig);
    const requestConfig = {
      method: 'GET',
      url: BASEURL + GET_ALL_ORDERS + '?' + dataQueryString + '&signature=' + signature,
      headers: {
        'X-MBX-APIKEY': BinanceAuthentication.binanceConfig.API_KEY
      }
    };

    try {
      console.log('URL: ', requestConfig.url);
      const response = await axios(requestConfig);
      console.log(response)
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

module.exports = BinanceRest;