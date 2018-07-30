require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js")
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var argumentArr = process.argv.slice(3);
var input = argumentArr.join(" ");

function spotifySearch(){

  spotify.search({ type: 'track', query: input, limit: '1' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("\n========================================================\n")
    console.log(`Artist: ${data.tracks.items[0].artists[0].name}\nSong: ${data.tracks.items[0].name}\nAlbum: ${data.tracks.items[0].album.name}\nURL: ${data.tracks.items[0].preview_url}`);
    console.log("\n======================================================") 
  });
}

function moiveSearch(){
    
var request = require("request");

request("http://www.omdbapi.com/?t="+ input +"&y=&plot=short&apikey=trilogy", function(error, response, body) {

    if (json == null){
        console.log("Does not Exist Search Again");

    }else if (!error && response.statusCode === 200) {

        var json = JSON.parse(body);
        
    
        console.log("\n========================================================\n")
        console.log(`Title: ${json.Title}\nYear: ${json.Year}\nImdb Rating: ${json.imdbRating}\nRotten Tomatoes Rating: ${json.Ratings[2].Value}\nCountry: ${json.Country}\nPlot: ${json.Plot}\nActors: ${json.Actors}`);
        console.log("\n======================================================") 
    }
  });
}

function randomFile(){
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    var dataArr = data.split(",");

    for(var i=0; i < dataArr.length; i++){

    };

    if(dataArr[0] === "spotify-this-song"){
        input = dataArr[1];
        spotifySearch();
    }
    
  
  });
}
  
if(process.argv[2] === "spotify-this-song" && process.argv[3] == null || process.argv[2] === "spotify-this-song" && process.argv[3] === ""){
   var input = "Ace of Base";
   spotifySearch();

}else if(process.argv[2] === "movie-this" && process.argv[3] == null || process.argv[2] === "movie-this" && process.argv[3] === ""){
    var input = "Mr. Nobody";
    moiveSearch();

}else if(process.argv[2] === "spotify-this-song"){
spotifySearch();

}else if(process.argv[2] === "movie-this"){
moiveSearch();

}else if(process.argv[2] === "do-what-it-says"){
randomFile();

}