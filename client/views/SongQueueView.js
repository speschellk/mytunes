// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'add', this.checker);
    // this.collection.bind('add', this.render());
    // this.collection.bind('add', this.checker());
    console.log('this, ', this);
    return this;
  },

  render: function() {
    console.log('this, ', this);
    return this.$el;
  },

  checker: function() {
    if (this.collection.length === 1) {
      this.collection.playFirst();
    }
  }

});
