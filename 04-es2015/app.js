let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// ########################################################################################
const citiesId = ["paris","nyc","rome","rio-de-janeiro"];
console.log(citiesId);

// const citiesId=[];
// console.log(citiesId);
// Erreur : SyntaxError: Identifier 'citiesId' has already been declared

// ########################################################################################

citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId){
  let city = cityId.toUpperCase();
  let temperature = 20;
  return {city,temperature};
}

const weather = getWeather(favoriteCityId);

console.log(weather);

//const city={city: weather.city};
// const temperature={temperature : weather.temperature};
const {city,temperature}= weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// ########################################################################################
class Trip {
  get price(){
    return this._price;
  }

  set price(price){
    this._price = price;
  }
  constructor(id,name,imageUrl){
    this.id = id;
    this.name=name;
    this.imageUrl=imageUrl;
  }

  toString(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
  }

  static getDefaultTrip(){
    return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.png");
    }
}

let parisTrip = new Trip('paris','Paris','img/paris.png');
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// ########################################################################################

class FreeTrip extends Trip{
  constructor(id,name,imageUrl,price){
    super(id,name,imageUrl);
    this.price =0;
    }

  toString(){
    return "Free" + super.toString();
  }
}

const freeTrip = new FreeTrip('nantes', "Nantes","img/nantes.jpg");
console.log(freeTrip.toString());

// ########################################################################################

class TripService {

  constructor() {

    this.tripSet = new Set();

    this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
    this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
    this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
  }

  findByName(tripName){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.tripSet.forEach((trip) => {
          if(trip.name == tripName){
            resolve(trip);
          }
        });
        reject("No trip with name "+tripName);
      },2000);
    })
  }
}

class PriceService {
  constructor() {
    this.prices = new Map();
    this.prices.set("paris", 100);
    this.prices.set("rio-de-janeiro", 800);
    }

  findPriceByTripId(tripId) {
   return new Promise((resolve,reject) => {
     setTimeout(() => {
       let price = this.prices.get(tripId);
       if (price){
         resolve(prices);
       }else{
         reject("No price found for id"+tripId);
       }
       // price ? resolve(price) : reject("No price found for id"+tripId) en utilisant operateur ternaire
     },2000);
  }
}

let tripService = new TripService();
tripService.findByName("Paris")
.then(
    tripFound => console.log("Trip found :"+tripFound),
    error => console.log(error)
);

tripService.findByName("Toulouse")
.then(
    tripFound => console.log("Trip found :"+tripFound),
    error => console.log(error)
);

tripService.findByName("Rio de Janeiro")
.then( tripFound => priceService.findPriceByTripId(tripFound.id))
.then( priceFound => console.log("Price found : "+priceFound))
.catch(error => console.log(error));
$
tripService.findByName("Nantes")
.then( tripFound => priceService.findPriceByTripId(tripFound.id))
.then( priceFound => console.log("Price found : "+priceFound))
.catch( error => console.log(error));
