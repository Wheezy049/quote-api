require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Quote API is running');
})

app.use('/api', quoteRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})