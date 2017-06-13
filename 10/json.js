var myJSON = '{"address1": "120", "address2": "Broadway", "city": "New York City", "rooms": ["bedroom", "kitchen", "bathroom"]}';

var parsedJSON = JSON.parse(myJSON);
console.log(parsedJSON);
console.log(parsedJSON.length);