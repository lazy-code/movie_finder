var React = require('react');
var AppActions = require('../actions/AppActions');

var SearchForm = React.createClass({
  getInitialState: function() {
    return {
      movieTitle: '',
      isTitleValid: true
    };
  },

  handleChange: function (e) {
    this.setState({
      movieTitle: e.target.value.trim(),
      isTitleValid: true
    })
  },

  handleSubmit: function (e) {
    e.preventDefault();

    if (this.state.movieTitle.length < 1) {
      this.setState({ isTitleValid: false });
      return false;
    }

    var movie = {
      title: this.state.movieTitle
    };

    AppActions.searchMovies(movie);
  },

  render: function(){

    var message = !this.state.isTitleValid ?
      <div className="alert alert-danger">Enter a movie title</div> :
      null;

    return (
      <div className="search-form">
        <h1 className="text-center">Search Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {message}
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
              value={this.state.movieTitle}
              placeholder="Enter a Movie Title..."
            />
          </div>
          <button className="btn btn-primary btn-block">Search</button>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;