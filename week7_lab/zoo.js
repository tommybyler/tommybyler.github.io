function myElephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = elephant;
  this.image = elephant.jpg”;
}

function myTiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = tiger;
  this.image = tiger.jpg”;
}

function myGiraffe(name, age) {
  this.name = name;
  this.age = age;
  this.type = giraffe;
  this.image = giraffe.jpg”;
}

var animals = [new myElephant(), new myTiger(), new myGiraffe()];
var animalNames = [Dax, Jojo, Garbo];

function generateRandomIndex(maxIndex) {
  Math.floor(Math.random()*maxIndex);
}

function generateRandomName() {
  generateRandomIndex(animalNames.length);
}

var randomName = generateRandomName();

//how to access index in array?
