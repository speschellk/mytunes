// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.listenTo(this, 'add', this.checker);
    this.listenTo(this, 'ended', this.remover);
  },

  checker: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  remover: function() {
    this.shift();
  },


  playFirst: function() {
    this.at(0).play();
  }

});


