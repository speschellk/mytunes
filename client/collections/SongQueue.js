// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // if (args) {
    //   for (var i = 0; i < args.length; i++) {
    //     this.add(args[i]);
    //   }
    //   if (this.length === 1) {
    //     this.playFirst();
    //   }
    // }
  },

  // add: function(models, options) {
  //   Backbone.Collection.prototype.add.call(this, models);
  //   if (this.length === 1) {
  //     this.playFirst();
  //   }
  // },

  // add: function(songData) {
  //   this.set(songData);
  //   if (this.length === 1) {
  //     // console.log('this.model ', this.model);
  //     // debugger;
  //     this.playFirst();
  //   }
  // },

  // listener: function() {
  //   this.on('change:length', function() {
  //     if (this.length === 1) {
  //       // console.log('this.model ', this.model);
  //       // debugger;
  //       this.playFirst();
  //     }
  //   }
  // },
  // event listener that's listening for additions to song queue length
    // look at song queue length

     // fire playFirst if song queue length is 1

  playFirst: function() {
    this.at(0).play();
  }

});


