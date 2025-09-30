require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quoteRoutes = require('./routes/quoteRoutes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 8000;

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Daily Quote API',
      version: '1.0.0',
      description: 'API that serves random and category-based quotes',
    },
    servers: [
      {
        url: 'http://localhost:8000/api',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

app.use(express.json());
app.use(cors());
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send('Quote API is running');
})

app.use('/api', quoteRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})