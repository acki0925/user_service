const crypto = require('crypto');

const binanceConfig = {
  API_KEY: 'qz819Hq7hJKr2KFbq8Clufo5nG6Wx2OezsfxgSlIpdjXkqO1XxxYXWUZXokBVQiz',
  API_SECRET: 'lzNVBipOkPpMtUflGTwxX2xbAh0leFXpG7A5HIdXvnsnjHFJMAhwl2UpQMUMIaRQ'
};

const buildSign = (data, config) => {
  return crypto.createHmac('sha256', config.API_SECRET).update(data).digest('hex');
};

module.exports = {binanceConfig, buildSign};