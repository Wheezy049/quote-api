# Daily Quote API

A simple API that serves random motivational quotes, with support for categories. Built with Node.js and Express.

## Features

- Get a random quote

- Get a quote by category

- Get all quotes

- 1-min caching for random and category quotes

- Interactive Swagger documentation

## Tech Stack

- Node.js

- Express.js

- CORS

- Swagger (swagger-jsdoc + swagger-ui-express)

- JSON file for storing quotes (can be swapped with a DB later)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Wheezy049/quote-api
cd quote-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file (optional):
```bash
PORT=8000
```

4. Start the server:
```bash
npm start
```

The server will run on http://localhost:8000 by default.

## API Endpoints

- Get all quotes
```bash
GET /api/quotes
```

Returns an array of all quotes.

- Get random quote
```bash
GET /api/quote
```

Returns a random quote (optionally filtered by category).

- Get random quote by category
```bash
GET /api/quote/:category
```

Returns a random quote from the specified category.

## Swagger documentation
```bash
GET /api-docs
```

Opens interactive API docs in the browser.

## Quote JSON Format
```bash
{
  "id": 1,
  "text": "Push yourself because no one else will.",
  "author": "Unknown",
  "category": "hardwork"
}
```

## Caching
Random quote and category quote are cached for 1 minutes by default.



✍️ Author

devfaruq