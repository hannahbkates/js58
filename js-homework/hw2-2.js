// Homework 2 - Assignment 2

h = Math.floor((Math.random() * 2000) + 1);

var streets = ['Broadway', 'St James Pkwy', 'East 12th St', 'West 122nd St', '5th Ave', 'Park Terrace', 'Main St', 'Yale Ave', 'Flamingo Dr', 'Ward Pkwy', 'Peachtree Rd'];
var s = Math.floor((Math.random() * (streets.length-1)) + 1);

var units = ['Suite 103', '#5', 'Apt 5R', '3rd Floor', 'Apt 201'];
var u = Math.floor((Math.random() * (units.length-1)) + 1);

var cities = ['New York, NY', 'Newark, NJ', 'Charlotte, NC', 'Denver, CO', 'Kansas City, MO', 'Sarasota, FL', 'Atlanta, GA', 'Boston, MA']
var c = Math.floor((Math.random() * (cities.length-1)) + 1);

if(h % 2 == 0) {
	console.log(h + ' ' + streets[s] + ', ' + units[u] + '\n' + cities[c]);
} else {
	console.log(h + ' ' + streets[s] + '\n' + cities[c]);
}