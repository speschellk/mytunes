// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;

    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: {'keys': 'artist,title,url'},
      contentType: 'application/json',
      success: function(data) {
        context.add(data.results);
      }
    });
  },

});