/*
https://github.com/Giphy/GiphyAPI

api_key - The public beta key is "dc6zaTOxFJmzC"

example: http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

search parameters:
  q - search query term or phrase
  limit - (optional) number of results to return, maximum 100. Default 25.
  offset - (optional) results offset, defaults to 0.
  rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
  lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code.
  fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

random parameters:
  tag - the GIF tag to limit randomness by
  rating - limit results to those rated (y,g, pg, pg-13 or r).
  fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
*/

// var params = getURLParams();
// console.log(urlParams.s);

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";

var trendingURL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
var randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';

function setup() {
  noCanvas();
  var params = getURLParams();
  var query = '&q=' + params.s;
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url).parent('gifs').addClass('img-thumbnail');
  }
}
