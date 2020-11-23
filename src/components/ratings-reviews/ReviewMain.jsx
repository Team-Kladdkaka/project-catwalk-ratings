import React, { useState, useEffect } from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import Reviews from './Reviews';
import {
  findRatingAverage,
  findRecommendPercent,
  getRatingPercentages,
} from './Rating-Helpers';

function ReviewMain(props) {
  const [ratingAverage, setRatingAverage] = useState(null);
  const [recommendPercentage, setRecommendPercentage] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  const [ratingsPercentages, setRatingPercentages] = useState(null);
  const [productCharacteristics, setProductCharacteristics] = useState(null);
  const [allReviews, setAllReviews] = useState(null);
  const [allRatings, setAllRatings] = useState(null);
  const [sortMethod, setSortMethod] = useState('relevance');
  const [starFilters, setStarFilters] = useState([]);
  const [unchangedReviews, setUnchangedReviews] = useState(null);

  let handleClearFilterClick = () => {
    setStarFilters([]);
    setAllReviews(unchangedReviews);
  };

  let filterByStar = () => {
    console.log(starFilters);
    for (let i = 0; i < allReviews.length; i++) {
      console.log(allReviews[i]);
      if (starFilters.indexOf(allReviews[i].rating) === -1) {
        allReviews.splice(i, 1);
      }
    }
    setAllReviews(allReviews);
  };

  // -------------- fetch data from reviews endpoint ---------------------
  useEffect(() => {
    fetch(`http://3.21.164.220/reviews/?product_id=284&sort=${sortMethod}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setReviewCount(result.count);
        setAllReviews(result.results);
        setUnchangedReviews(result.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortMethod]);

  // -------------- fetch data from reviews meta endpoint ---------------------
  useEffect(() => {
    fetch('http://3.21.164.220/reviews/meta?product_id=284')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setRatingAverage(findRatingAverage(result.ratings));
        setRecommendPercentage(findRecommendPercent(result.recommended));
        setRatingPercentages(getRatingPercentages(result.ratings));
        setProductCharacteristics(result.characteristics);
        setAllRatings(result.ratings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="review-main-container">
      <RatingsAndReviews
        ratingAverage={ratingAverage}
        recommendPercentage={recommendPercentage}
        ratingsPercentages={ratingsPercentages}
        productCharacteristics={productCharacteristics}
        setStarFilters={setStarFilters}
        starFilters={starFilters}
        filterByStar={filterByStar}
      />
      <Reviews
        reviewCount={reviewCount}
        allReviews={allReviews}
        allRatings={allRatings}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        setStarFilters={setStarFilters}
        starFilters={starFilters}
        handleClearFilterClick={handleClearFilterClick}
        filterByStar={filterByStar}
        productCharacteristics={productCharacteristics}
      />
    </div>
  );
}

export default ReviewMain;
