var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events');
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch (action.type) {
    case AppConstants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
  }
  return true;
});

module.exports = AppStore;