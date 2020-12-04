/* eslint-disable camelcase */
/* eslint-disable no-undef */
const db = require('./sqlConfig');


module.exports = {
  getMeta: function(productId, callback) {
    let results = {};
    let ratings = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    };
    results.product_id = productId.toString();
    db.queryAsync(`SELECT COUNT(*) FROM allReviews WHERE product_id=${productId} AND recommend=1`)
      .then((result) => {
        results.recommended = { 0: result[0][0]['COUNT(*)']};
        return db.queryAsync(`SELECT rating FROM allReviews WHERE product_id=${productId}`);
      })
      .then((rates) => {
        rates[0].map((rate) => {
          ratings[rate.rating.toString()] += 1;
        });
        callback(null, results);
      })
      .error(error => {
        callback(error, results);
      });
  },

  getCharacteristics: function(productId, callback) {
    let results = {};
    db.queryAsync(`SELECT characteristic_id,name FROM characteristics WHERE product_id=${productId}`)
      .then((result) => {
        console.log(result);
        //db.queryAsync(`SELECT value FROM characteristicsReview WHERE characteristic_id=${result[0][0]}`)
        callback(null, result);
      })
      .error(error => {
        callback(error, results);
      });
  },

  getReviews: function(productId, sort, callback) {
    let results = {};
    let sortBy = '';
    if (sort === 'helpful') {
      sortBy = 'helpfulness';
    } else if (sort === 'newest') {
      sortBy = 'date';
    } else {
      // eslint-disable-next-line quotes
      sortBy = `helpfulness,date`;
    }
    results.product_id = productId.toString();
    db.queryAsync(`SELECT review_id,rating,date,summary,body,recommend,reviewer_name,response,helpfulness FROM allReviews WHERE product_id=${productId} AND reported=0 ORDER BY ${sortBy} DESC`)
      .then((result) => { 
        results.results = result[0];
        return db.queryAsync(` SELECT p.*, a.product_id FROM photos as p INNER JOIN allReviews as a ON p.review_id = a.review_id WHERE a.product_id=${productId};`);
      })
      .then((allPhotos) => {
        results.results.map((review) => {
          review.photos = [];
          allPhotos[0].map(photo => {
            console.log('meow', photo);
            if (review.review_id === photo.review_id) {
              let aPhoto = {'id': photo.id, 'url': photo.url};
              review.photos.push(aPhoto);
            }
          });
        });
        callback(null, results);
      })
      .error(error => {
        callback(error, results);
      });
  },

  markHelpful: function(reviewId, callback) {
    db.queryAsync(`UPDATE allReviews SET helpfulness = helpfulness + 1 WHERE review_id=${reviewId}`)
      .then(() => {
        callback(null);
      })
      .error(error => {
        callback(error);
      });
  },

  report: function(reviewId, callback) {
    db.queryAsync(`UPDATE allReviews SET reported=1 WHERE review_id=${reviewId}`)
      .then(() => {
        callback(null);
      })
      .error(error => {
        callback(error);
      });
  },

  addReview: function(productId, review, callback) {
    db.queryAsync(`INSERT INTO allReviews VALUES (${productId}, ${review.rating}, ${review.date}, ${review.summary}, ${review.body}, ${review.recommend}, 0, ${review.reviewer_name}, ${review.reviewer_email}, null, 0)`)
      .then(() => {
        callback(null);
      })
      .error(error => {
        callback(error);
      });
  }
};