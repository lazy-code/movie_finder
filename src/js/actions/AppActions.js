var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies: function(movie) {
    AppDispatcher.handleViewAction({
      type: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  }
};

module.exports = AppActions;