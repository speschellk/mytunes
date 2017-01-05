// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // triggers an enqueue event
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // triggers a dequeue event
    this.trigger('dequeue', this);
  },

  ended: function() {
    // triggers an ended event
    this.trigger('ended', this);
  }

});
