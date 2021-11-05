const express = require('express');
const cors = require('cors');
const axios = require('axios');
const logger = require('../config/logger');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.urlencoded({ extends: false }));

app.get('/', (req, res) => {
    res.send('this is root route!')
})

app.get('/api/products/all', async (req, res) => {
    const { page } = req.query;
    const pageSize = 5;
    const apiUrl = `https://fakestoreapi.com/products`;
    let prod = await axios.get(apiUrl);

    let startIndex = (page - 1) * pageSize, lastIndex = (parseInt(page) * pageSize);

    let products = prod.data.slice(startIndex, lastIndex)

    return res.status(200).json(products)
})

app.listen(PORT, () => logger.info(`server is up and rolling...`));