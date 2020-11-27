const express = require('express');
const binanceEndPoints = require('../services/binance-endpoints')

const router = express.Router();

router.get('/klines',binanceEndPoints.klines);
router.post('/neworder',binanceEndPoints.NewOrder);
router.get('/queryorder',binanceEndPoints.QueryOrder);
router.delete('/cancelorder',binanceEndPoints.CancelOrder);
router.delete('/cancelallopensymbol',binanceEndPoints.CancelAllOpenOrderSymbol);
router.get('/currentorder',binanceEndPoints.CurrentOrder);
router.get('/allorder',binanceEndPoints.AllOrder);

module.exports = router;
