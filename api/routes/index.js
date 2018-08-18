const express = require('express');
const router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

// Hotels routes
router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll)
    .post(ctrlHotels.hotelsAddOne);
router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne)
    .put(ctrlHotels.hotelsUpdateOne)
    .delete(ctrlHotels.hotelsDeleteOne);
 
// Reviews routes
router
    .route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll)
    .post(ctrlReviews.reviewsAddOne);

router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;