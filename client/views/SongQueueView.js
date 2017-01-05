// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {
    console.log('this, ', this);
    return this.$el;
  }

  // re-render whenever there's a change to the SongQueue

});
