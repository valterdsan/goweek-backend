const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

// Tweets
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
// Likes
routes.post('/likes/:id', LikeController.store);

module.exports = routes;