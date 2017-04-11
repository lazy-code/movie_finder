var React = require('react');
var PropTypes = require('prop-types');
var Movie = require('./Movie');

var MovieResults = React.createClass({
  propTypes:{
    // From App Component
    movies: PropTypes.array.isRequired
  },

  render: function(){

    var results = this.props.movies.map(function(movie){
      return <Movie movie={movie} key={movie.imdbID} />;
    });

    return (
      <div>
        <h3 className="text-center">Results</h3>
        {results}
      </div>
    )
  }
});

module.exports = MovieResults;