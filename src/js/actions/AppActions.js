var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies: function (movie) {
    AppDispatcher.handleViewAction({
      type: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },
  receiveMovieResults: function (movies) {
    AppDispatcher.handleViewAction({
      type: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  }
};

module.exports = AppActions;