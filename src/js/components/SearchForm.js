var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var SearchForm = React.createClass({
  getInitialState: function() {
    return { movieTitle: '' };
  },

  handleChange: function (e) {
    this.setState({ movieTitle: e.target.value.trim() })
  },

  handleSubmit: function (e) {
    e.preventDefault();
    console.log('submitted');
  },

  render: function(){
    return (
      <div className="search-form">
        <h1 className="text-center">Search Movie</h1>
        <form onSubmit={this.handleSubmit}>
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