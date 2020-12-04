/* eslint-disable no-undef */
const express = require('express');
const app = express();
const path = require('path');
const dbHelper = require('./dbHelper');

const port = 3001;

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/reviews/:product_id/meta', (req, res) => {
  let pID = req.params.product_id;
  dbHelper.getMeta(pID, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.get('/reviews/:product_id/sort/:sort', (req, res) => {
  let pID = req.params.product_id;
  let sort = req.params.sort;
  dbHelper.getReviews(pID, sort, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.get('/reviews/:product_id/ratings', (req, res) => {
  let pID = req.params.product_id;
  dbHelper.getRatings(pID, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.get('/reviews/:product_id/characteristics', (req, res) => {
  let pID = req.params.product_id;
  dbHelper.getCharacteristics(pID, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.put('/reviews/helpful/:review_id', (req, res) => {
  let rID = req.params.review_id;
  dbHelper.markHelpful(rID, (err) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/reviews/report/:review_id', (req, res) => {
  let rID = req.params.review_id;
  dbHelper.report(rID, (err) => {
    if (err) {
      res.sendStatus(501);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));