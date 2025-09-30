const express = require('express');
const { getRandomQuote, getQuoteByCategory, getAllQuotes } = require('../controllers/quoteControllers');

const router = express.Router();

router.get('/quotes', getAllQuotes);

router.get('/quote', getRandomQuote);

router.get('/quote/:category', getQuoteByCategory);

module.exports = router;