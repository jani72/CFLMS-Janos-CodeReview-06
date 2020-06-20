class locations{
	name : string;
	city : string;
	zipcode : any;
	address : string;
	image : any;

	constructor(name, city, zipcode, address, image){
		this.name = name;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.image = image;
	}

	render() { 
		return ``			

	}
}

class places extends locations {

	constructor(name, city, zipcode, address, image){
		super(name, city, zipcode, address, image);
	}
	render(){
		return `
		${super.render()}
		<div class="media col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
  		<div class="media-left">
  		<hr>
    	<a href="#">
      	<img class="img-rounded media-object d-sm-none d-md-block" src="${this.image}" style= "width: 200px height: 150px">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-12 col-md-1 col-sm-12 media-text">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<hr>
  		</div>
		</div>
		`
	}
}

class restaurant extends locations{
	tel : string;
	type : string;
	website : any;

	constructor(name, city, zipcode, address, image, tel, type, website){
		super(name, city, zipcode, address, image);
		this.tel = tel;
		this.type = type;
		this.website = website;
	}

	render(){
		return `
		${super.render()}
		<div class="media col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
  		<div class="media-left d-none d-sm-block">
  		<hr>
    	<a href="${this.website}">
      	<img class="media-object" src="${this.image}" alt="...">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-12 col-md-1 col-sm-12">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<p><b>Tel.:</b>${this.tel}</p>
    	<p><b>Type: </b>${this.type}</p>
    	<p><b>Website: </b><a href="${this.website}"$</a>${this.name}</p>
    	<hr>
  		</div>
		</div>
		`
	}

}

class events extends locations{
	eventdate : string;
	ticketprice : any;

	constructor(name, city, zipcode, address, image, eventdate, ticketprice){
		super(name, city, zipcode, address, image,);
		this.eventdate = eventdate;
		this.ticketprice = ticketprice;
	}

	render(){
		return `
		${super.render()}
		<div class="media col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
  		<div class="media-left ">
  		<hr>
    	<a href="#">
      	<img class="media-object" src="${this.image}" alt="...">
    	</a>
    	<hr>
  		</div>
  		<div class="media-body col-lg-12 col-md-1 col-sm-12">
    	<h4 class="media-heading media-text">${this.name}</h4>
    	<p><b>City:</b> ${this.city}</p>
    	<p><b>ZIP-Code:</b> ${this.zipcode}</p>
    	<p><b>Address:</b> <br>${this.address}</p>
    	<p><b>Date</b> ${this.eventdate}</p>
    	<p><b>Price:</b> € ${this.ticketprice}</p>
  		</div>
		</div>
		`
	}

}


var placesData = new Array();
placesData[0] = new places("Rathaus", "Amberg, Germany",  92224, "Marktplatz 11, Amberg", "Images/Amberg.jpg")
placesData[1] = new places("Schloss Orth", "Gmunden, Austria",  4810, "Ort 1, Gmunden", "Images/Gmunden.jpg")
placesData[2] = new places("Pestsäule", "Linz, Austria",  4020, "Stadtplatz 1, Linz", "Images/Linz.jpeg")
placesData[3] = new places("Hungarian Parliament", "Budapest, Hungary",  1011, "Kossuth Lajos ter 1-3, Budapest", "Images/Budapest.png")

var restaurantData = new Array();
restaurantData[0] = new restaurant("Bergwirtschaft", "Amberg, Germany", 92224, "Auf dem Mariahilfberg 2", "Images/Bergwirtschaft_Amberg.jpg", "+49 (0) 09621 12248", "Bavarian", "https://www.https://www.bergwirtschaft-amberg.de/")
restaurantData[1] = new restaurant("Orther Stub´n", "Gmunden, Austria", 4810, "Ort 1", "Images/Orther_Stubn.jpg", "+43 7612 62499", "Luxury", "https://www.schlossorth-gmunden.at/")
restaurantData[2] = new restaurant("Josef", "Linz, Austria", 4020, "Landstrasse 49", "Images/Josef_Linz.jpg", "+43 732 773165", "Austrian", "https://www.josef.eu")
restaurantData[3] = new restaurant("Boscolo", "Budapest, Hungary", 1011, "Erzsebet krt. 9-11.", "Images/Boscolo_Budapest.jpg", "+1-(888)-578-2711", "Luxury", "https://www.fivestaralliance.com/")

var eventData = new Array();

eventData[0] = new events("Stadtfest", "Amberg, Germany", 92224, "Marktplatz 11", "Images/Amberger_Stadtfest.jpg", "15.August, 2020", 0)
eventData[1] = new events("Lichterfest", "Gmunden, Austria", 4810, "Rathausplatz 1", "Images/Lichterfest.jpg", "8.August, 2020", 60)
eventData[2] = new events("Pflasterspektakel", "Linz, Austria", 4020, "Landstrasse 1", "Images/pflasterspektakel.jpg", "25th June - 27th June, 2020", 0)
eventData[3] = new events("Formula 1", "Budapest", 1011, "Hungaroring", "Images/F1 Budapest.png", "6th August - 9th August, 2020", 450)

function drawContentPlaces() {
	for (let index in placesData) {
		document.getElementById("places").innerHTML += placesData[index].render();
	}
}

function drawContentRestaurants() {
	for (let index in restaurantData) {
		document.getElementById("restaurants").innerHTML += restaurantData[index].render();
	}
}

function drawContentEvents() {
	for (let index in eventData) {
		document.getElementById("events").innerHTML += eventData[index].render();
	}
}


document.addEventListener("DOMContentLoaded", function(){
	drawContentPlaces();
	drawContentRestaurants();
	drawContentEvents();

});




