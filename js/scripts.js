// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

// configure JSON call
//The API feed, the destination, the endpoint, where we want to go
var getStuff = 'https://xalevanie.dropmark.com/420954.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  console.log(data.items);
  console.log(data.items[0].link);
  console.log(data.items[0].user_name);
  console.log(data.items[0].thumbnails.cropped);
  
  // What do you want to do? Show (display on page) data? 
  //showStuff(data);
  
};




// Get our data, set
$.getJSON(getStuff, setStuff, doStuff);


// Display it 