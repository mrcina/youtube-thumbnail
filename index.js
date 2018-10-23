'use strict';

var getYouTubeID = require('get-youtube-id');

module.exports = function(url){
  var id = getYouTubeID(url);

  if(!id && url.length === 11){
    id = url
  }

  return {
    'default': {
      url: 'https://img.youtube.com/vi/' + id + '/default.jpg',
      width: 0,
      height: 0
    },
    high: {
      url: 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg',
      width: 0,
      height: 0
    },
    standard: {
      url: 'https://img.youtube.com/vi/' + id + '/sddefault.jpg',
      width: 0,
      height: 0
    },
    medium: {
      url: 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg',
      width: 0,
      height: 0
    },
    low: {
      url: 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg',
      width: 0,
      height: 0
    },
  }
};
