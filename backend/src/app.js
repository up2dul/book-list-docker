import express from 'express';
import cors from 'cors';

import booksData from './books.json' assert { type: 'json' };

const app = express();

app.use(cors());

app.get('/books', (req, res) => {
  res.json({
    message: 'success retrieving books',
    count: booksData.length,
    data: booksData,
  });
});

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});
