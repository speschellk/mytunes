// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',


  initialize: function() {
    // this.listenTo(el, 'ended', function() {

    // this.events = {
    //   'ended': console.log(this)
    // };


    //   console.log('heyo');
    // });
    // this.on('change:$el', function() {
    //   debugger;
    // });


    var that = this;
    // debugger;
    // this.$el.bind('ended', function(e, that) {
    //   //debugger;
    //   console.log(e);
      // that.model;
      // debugger;
    // });
  },

  events: {
    'ended': 'nextSong'
  },

  nextSong: function() {
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
