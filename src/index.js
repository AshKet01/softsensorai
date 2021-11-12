const express = require('express');
const cors = require('cors');
const axios = require('axios');
const logger = require('../config/logger');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.urlencoded({ extends: false }));

app.get('/api/products/all', async (req, res) => {
    const { page } = req.query;
    const pageSize = 1;
    const apiUrl = `https://fakestoreapi.com/products`;
    let prod = await axios.get(apiUrl);

    let startIndex = (page - 1) * pageSize, lastIndex = (parseInt(page) * pageSize);

    let products = prod.data.slice(startIndex, lastIndex)

    return res.status(200).json(products)
})

app.get('something', (req, res) => {
    const name = 'nick';
    return res.json(name)
})

app.get('api/user', (req, res) => {
    const { user_id } = req.query;
    return res.json(user_id)
})

app.get('/api/product', (req, res) => {
    const {prod_id} = req.query;
    //do something
    return res.json(prod_id);
})

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('reactjs/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'reactjs', 'build', 'index.html'));
    });
}

app.listen(PORT, () => logger.info(`server is up and rolling...`));