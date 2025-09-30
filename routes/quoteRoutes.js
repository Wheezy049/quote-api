const express = require('express');
const { getRandomQuote, getQuoteByCategory, getAllQuotes } = require('../controllers/quoteControllers');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather data endpoints
 */

/**
 * @swagger
 * /quotes:
 *   get:
 *     summary: Get all quotes
 *     description: Returns an array of all quotes in the system.
 *     responses:
 *       200:
 *         description: Array of quote objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   text:
 *                     type: string
 *                     example: "Push yourself because no one else will."
 *                   author:
 *                     type: string
 *                     example: "Unknown"
 *                   category:
 *                     type: string
 *                     example: "hardwork"
 */

/**
 * @swagger
 * /quote:
 *   get:
 *     summary: Get a random quote
 *     description: Returns a random motivational quote. Optional query parameter `category` to get a random quote from a specific category.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Category of the quote (e.g., hardwork, inspiration, love)
 *     responses:
 *       200:
 *         description: A single quote object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 5
 *                 text:
 *                   type: string
 *                   example: "Push yourself because no one else will."
 *                 author:
 *                   type: string
 *                   example: "Unknown"
 *                 category:
 *                   type: string
 *                   example: "hardwork"
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /quote/{category}:
 *   get:
 *     summary: Get a random quote by category
 *     description: Returns a random quote from the specified category.
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: The category of the quote (e.g., hardwork, inspiration, love)
 *     responses:
 *       200:
 *         description: A quote object from the requested category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 12
 *                 text:
 *                   type: string
 *                   example: "Believe in yourself and all that you are."
 *                 author:
 *                   type: string
 *                   example: "Christian D. Larson"
 *                 category:
 *                   type: string
 *                   example: "inspiration"
 *       404:
 *         description: Category not found
 */

router.get('/quotes', getAllQuotes);
router.get('/quote', getRandomQuote);
router.get('/quote/:category', getQuoteByCategory);

module.exports = router;
