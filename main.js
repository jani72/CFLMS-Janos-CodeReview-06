var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, city, zipcode, address, image) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
    }
    locations.prototype.render = function () {
        return "";
    };
    return locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(name, city, zipcode, address, image) {
        return _super.call(this, name, city, zipcode, address, image) || this;
    }
    places.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3 col-md-6 col-sm-12 d-flex flex-column\">\n  \t\t<div class=\"media-left\">\n  \t\t<hr>\n    \t<a href=\"#\">\n      \t<img class=\"img-rounded media-object d-sm-none d-md-block\" src=\"" + this.image + "\" style= \"width: 200px height: 150px\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-12 col-md-1 col-sm-12 media-text\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p><b>City:</b> " + this.city + "</p>\n    \t<p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n    \t<p><b>Address:</b> <br>" + this.address + "</p>\n    \t<hr>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return places;
}(locations));
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, zipcode, address, image, tel, type, website) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.tel = tel;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3 col-md-6 col-sm-12 d-flex flex-column\">\n  \t\t<div class=\"media-left d-none d-sm-block\">\n  \t\t<hr>\n    \t<a href=\"" + this.website + "\">\n      \t<img class=\"media-object\" src=\"" + this.image + "\" alt=\"...\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-12 col-md-1 col-sm-12\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p><b>City:</b> " + this.city + "</p>\n    \t<p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n    \t<p><b>Address:</b> <br>" + this.address + "</p>\n    \t<p><b>Tel.:</b>" + this.tel + "</p>\n    \t<p><b>Type: </b>" + this.type + "</p>\n    \t<p><b>Website: </b><a href=\"" + this.website + "\"$</a>" + this.name + "</p>\n    \t<hr>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return restaurant;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, zipcode, address, image, eventdate, ticketprice) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.eventdate = eventdate;
        _this.ticketprice = ticketprice;
        return _this;
    }
    events.prototype.render = function () {
        return "\n\t\t" + _super.prototype.render.call(this) + "\n\t\t<div class=\"media col-lg-3 col-md-6 col-sm-12 d-flex flex-column\">\n  \t\t<div class=\"media-left \">\n  \t\t<hr>\n    \t<a href=\"#\">\n      \t<img class=\"media-object\" src=\"" + this.image + "\" alt=\"...\">\n    \t</a>\n    \t<hr>\n  \t\t</div>\n  \t\t<div class=\"media-body col-lg-12 col-md-1 col-sm-12\">\n    \t<h4 class=\"media-heading media-text\">" + this.name + "</h4>\n    \t<p><b>City:</b> " + this.city + "</p>\n    \t<p><b>ZIP-Code:</b> " + this.zipcode + "</p>\n    \t<p><b>Address:</b> <br>" + this.address + "</p>\n    \t<p><b>Date</b> " + this.eventdate + "</p>\n    \t<p><b>Price:</b> \u20AC " + this.ticketprice + "</p>\n  \t\t</div>\n\t\t</div>\n\t\t";
    };
    return events;
}(locations));
var placesData = new Array();
placesData[0] = new places("Rathaus", "Amberg, Germany", 92224, "Marktplatz 11, Amberg", "Images/Amberg.jpg");
placesData[1] = new places("Schloss Orth", "Gmunden, Austria", 4810, "Ort 1, Gmunden", "Images/Gmunden.jpg");
placesData[2] = new places("Pestsäule", "Linz, Austria", 4020, "Stadtplatz 1, Linz", "Images/Linz.jpeg");
placesData[3] = new places("Hungarian Parliament", "Budapest, Hungary", 1011, "Kossuth Lajos ter 1-3, Budapest", "Images/Budapest.png");
var restaurantData = new Array();
restaurantData[0] = new restaurant("Bergwirtschaft", "Amberg, Germany", 92224, "Auf dem Mariahilfberg 2", "Images/Bergwirtschaft_Amberg.jpg", "+49 (0) 09621 12248", "Bavarian", "https://www.https://www.bergwirtschaft-amberg.de/");
restaurantData[1] = new restaurant("Orther Stub´n", "Gmunden, Austria", 4810, "Ort 1", "Images/Orther_Stubn.jpg", "+43 7612 62499", "Luxury", "https://www.schlossorth-gmunden.at/");
restaurantData[2] = new restaurant("Josef", "Linz, Austria", 4020, "Landstrasse 49", "Images/Josef_Linz.jpg", "+43 732 773165", "Austrian", "https://www.josef.eu");
restaurantData[3] = new restaurant("Boscolo", "Budapest, Hungary", 1011, "Erzsebet krt. 9-11.", "Images/Boscolo_Budapest.jpg", "+1-(888)-578-2711", "Luxury", "https://www.fivestaralliance.com/");
var eventData = new Array();
eventData[0] = new events("Stadtfest", "Amberg, Germany", 92224, "Marktplatz 11", "Images/Amberger_Stadtfest.jpg", "15.August, 2020", 0);
eventData[1] = new events("Lichterfest", "Gmunden, Austria", 4810, "Rathausplatz 1", "Images/Lichterfest.jpg", "8.August, 2020", 60);
eventData[2] = new events("Pflasterspektakel", "Linz, Austria", 4020, "Landstrasse 1", "Images/pflasterspektakel.jpg", "25th June - 27th June, 2020", 0);
eventData[3] = new events("Formula 1", "Budapest", 1011, "Hungaroring", "Images/F1 Budapest.png", "6th August - 9th August, 2020", 450);
function drawContentPlaces() {
    for (var index in placesData) {
        document.getElementById("places").innerHTML += placesData[index].render();
    }
}
function drawContentRestaurants() {
    for (var index in restaurantData) {
        document.getElementById("restaurants").innerHTML += restaurantData[index].render();
    }
}
function drawContentEvents() {
    for (var index in eventData) {
        document.getElementById("events").innerHTML += eventData[index].render();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    drawContentPlaces();
    drawContentRestaurants();
    drawContentEvents();
});
