// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.listenTo(this, 'add', this.checker);
    this.listenTo(this, 'ended', this.remover);
    this.listenTo(this, 'dequeue', function(model) {
      this.remove(model);
    });
  },

  checker: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  remover: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop', this);
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});


