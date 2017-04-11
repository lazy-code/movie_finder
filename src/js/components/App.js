var React = require('react');
var AppStore = require('../stores/AppStores');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');

var getAppState = function () {
  return {
    movies: AppStore.getMovieResults()
  }
};

var App = React.createClass({
  getInitialState: function () {
    return getAppState();
  },

  componentDidMount: function () {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getAppState());
  },

  render: function(){
    var moviesResults, movies = this.state.movies;
    if ( Array.isArray(movies) ) {
      if ( movies.length === 0 ){
        moviesResults = null;
      } else {
        moviesResults = <MovieResults movies={movies} />;
      }
    }
    if ( typeof movies === 'undefined' ){
      moviesResults = <div>
        <h3 className="text-center">Results</h3>
        <div className="alert alert-info">No movie found with such title</div>
      </div>;
    }

    return (
      <div>
        <SearchForm />
        {moviesResults}
      </div>
    )
  }

});

module.exports = App;