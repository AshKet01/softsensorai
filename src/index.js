const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('this is root route!')
})

app.listen(PORT, () => console.log(`api is up and rolling...`));