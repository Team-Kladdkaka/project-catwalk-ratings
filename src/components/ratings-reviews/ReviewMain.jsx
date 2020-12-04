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
    let tempArr = [];
    if (starFilters.length > 0) {
      for (let i = 0; i < unchangedReviews.length; i++) {
        if (
          unchangedReviews[i].rating === starFilters[0] ||
          unchangedReviews[i].rating === starFilters[1] ||
          unchangedReviews[i].rating === starFilters[2] ||
          unchangedReviews[i].rating === starFilters[3] ||
          unchangedReviews[i].rating === starFilters[4]
        ) {
          tempArr.push(unchangedReviews[i]);
        }
      }
      console.log(tempArr);
      setAllReviews(tempArr);
    }
  };

  useEffect(() => {
    filterByStar();
  }, [starFilters]);

  // -------------- fetch data from reviews endpoint ---------------------
  useEffect(() => {
    fetch(
      `http://localhost:3001/reviews/${props.current}/sort/${sortMethod}`
    )
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
  }, [sortMethod, props.current]);

  // -------------- fetch data from reviews meta endpoint ---------------------
  useEffect(() => {
    fetch(`http://localhost:3001/reviews/${props.current}/meta`)
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
  }, [props.current]);

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
