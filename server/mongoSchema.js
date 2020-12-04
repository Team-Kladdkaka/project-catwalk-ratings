/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  review_id: Number,
  body: String,
  reviewer_name: String,
  photos: String,
  summary: String,
  recommended: Number,
  helpfulness: Number,
  rating: Number,
  characteristics: String,
  response: String,
  reported: {type: Boolean, default: false}
}, 
{
  timestamps: true
}
);

const productSchema = new mongoose.Schema({
  product_id: Number,
  reviews: String,
  name: String,
  characteristics: String,
  recommended: Number,
  ratings: String
});

const Products = mongoose.model('Products', productSchema);
const Reviews = mongoose.model('Reviews', reviewSchema);

//module.exports = ;
