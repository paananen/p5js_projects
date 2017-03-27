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
var resultLimit = 25;
var resultOffset = 0;
var randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';
var resultOffset = '&offset='

function setup() {
    noCanvas();
    var params = getURLParams();
    var query = '&q=' + params.s;
    var offset = 0;

    if (params.o) {
      if (params.o > 0) {
        offset = params.o;
      }
    }

    var url = api + apiKey + query + '&offset=' + offset;

    for (var i = 0; i < resultLimit; i++) {
      var cardID = 'c' + i;
      createDiv('').addClass('card text-center').id(cardID).parent('cardholder');
    }

    var appURL = getURL();
    //set appURL to the base URL
    appURL = appURL.substring(0, (appURL.lastIndexOf("/") + 1));
    var prevOffset = offset - 25;
    var nextOffset = offset;
    nextOffset = (nextOffset * 1 + 25);
    var ppURLPath = appURL + '?s=' + params.s + '&o=' + prevOffset;
    url = url + '&o=' + prevOffset;
    var npURLPath = appURL + '?s=' + params.s + '&o=' + nextOffset;
    url = url + '&o=' + nextOffset;
    // console.log(url);

    if (params.s) {
      if (params.o) {
        if (params.o > 0){
          createA(ppURLPath, '<').class('btn btn-primary btn-small text-left').parent('topBarLeft');
          createA(ppURLPath, '<').class('btn btn-primary btn-small text-left').parent('bottomBarLeft');
        }
      }
      createA(npURLPath, '>').class('btn btn-primary btn-small text-right').parent('topBarRight');
      createA(npURLPath, '>').class('btn btn-primary btn-small text-right').parent('bottomBarRight');
    }

    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        var parentID = 'c' + i;
        var parentBlockID = 'cb' + i;
        createImg(giphy.data[i].images.fixed_width_downsampled.url).parent(parentID).addClass('card-img-top img-fluid');
    }

    for (var i = 0; i < resultLimit; i++) {
        var parentID = 'c' + i;
        var cardBlockID = 'cb' + i;
        createDiv('').addClass('card-block').id(cardBlockID).parent(parentID).style('padding-top', '0').style('padding-right', '0');
    }

    for (var i = 0; i < resultLimit; i++) {
        var parentID = 'cb' + i;
        var id = 'gifLink' + i;
        var url = giphy.data[i].images.original.url;
        createA(url, '&#x221e;').parent(parentID).addClass('gifLink float-right').attribute('target', '_blank').style('text-decoration', 'none');
    }
}
