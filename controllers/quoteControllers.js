const fs = require('fs');
const path = require('path');

const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../quotes.json'), 'utf-8'));

let cachedQuote = null;
let cacheTime = null;
let cachedCategoryQuotes = {};
const CACHE_DURATION = 60 * 1000;

function getAllQuotes(req, res){
    res.json(quotes);
}

function getRandomQuote(req, res){
   const now = Date.now();

   if(!cachedQuote || !cacheTime || (now - cacheTime) > CACHE_DURATION){
      const randomIndex = Math.floor(Math.random() * quotes.length);
      cachedQuote = quotes[randomIndex];
      cacheTime = now;
   }

   res.json(cachedQuote);
}

function getQuoteByCategory(req, res) {
    const category = req.query.category?.toLowerCase() || req.params.category?.toLowerCase() || req.body.category?.toLowerCase();
    if (!category) return res.status(400).json({ message: "Category is required" });

    const now = Date.now();

    if (!cachedCategoryQuotes[category] || (now - cachedCategoryQuotes[category].time > CACHE_DURATION)) {
        const filtered = quotes.filter(q => q.category.toLowerCase() === category);
        if (!filtered.length) return res.status(404).json({ message: "No quotes found for this category" });

        const randomIndex = Math.floor(Math.random() * filtered.length);
        cachedCategoryQuotes[category] = {
            quote: filtered[randomIndex],
            time: now
        };
    }

    res.json(cachedCategoryQuotes[category].quote);
}

module.exports = {
    getAllQuotes,
    getRandomQuote,
    getQuoteByCategory
}