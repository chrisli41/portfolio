/**
 * Created by christopherli on 8/19/16.
 */
var initialLinks = [
    {href: "#", text: 'Résumé'}, 
    {href: "#", text: 'Contact'}, 
    {href: "#", text: 'Projects'},
    {href: "#", text: 'About'}
];

var initialTiles = [
    {id: "tribute", text: "Tribute Page"},
    {id: "quote", text: "Random Quote"},
    {id: "weather", text: "Weather App"},
    {id: "wiki", text: "Wikipedia Viewer"}
    
];

/*
<div id="tribute" class="mid project-tiles col-md-3"><p>Tribute Page</p></div>
<div id="quote" class="mid project-tiles col-md-3"><p>Random Quote</p></div>
<a href="#"><div id="weather" class="mid project-tiles col-md-3"><p>Weather App</p></div></a>
<div id="wiki" class="mid project-tiles col-md-3"><p>Wikipedia Viewer</p></div>

 <div id="twitch" class="mid project-tiles col-md-3">Twitch App</div>
 <div id="calc" class="mid project-tiles col-md-3"><p>Calculator</p></div>
 <div id="clock" class="mid project-tiles col-md-3"><p>Pomodoro Clock</p></div>
 <div id="tic" class="mid project-tiles col-md-3"><p>Tic Tac Toe Game</p></div>


 <div id="simon" class="mid project-tiles col-md-3"><p>Simon Game</p></div>
*/

var Link = function(data){
    this.text = ko.observable(data.text);
    this.href = ko.observable(data.href);
};

var Tile = function(data){
    this.id = ko.observable(data.id);
    this.text = ko.observable(data.text);
};

var ViewModel = function(){
    var self = this;
    
    this.linkList = ko.observableArray([]);
    this.tileList = ko.observableArray([]);
    
    initialLinks.forEach(function(linkItem){
        self.linkList.push(new Link(linkItem));
    });
    
    initialTiles.forEach(function(tileItem){
        self.tileList.push(new Tile(tileItem));
    });
};

ko.applyBindings(new ViewModel());