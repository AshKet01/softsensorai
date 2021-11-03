const express = require('express');
const logger = require('../config/logger');

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('this is root route!')
})

app.listen(PORT, () => logger.info(`server is up and rolling...`));