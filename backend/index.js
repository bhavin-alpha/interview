const express = require('express');
const fetch = require('node-fetch');
var cors = require('cors')
const app = express()
app.use(cors())
const port = 3000;

const url = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyAgbIHvUd4cEKgSCQHoX-RFzLYtkPREZvc&q=something";

const page_size = [5, 10, 15];

app.get('/books/:page?', async (req, res) => {
    const response = await fetch(url);
    const data = await response.json()
    res.json(data?.items.slice(0, req.params.page || page_size[0]));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})