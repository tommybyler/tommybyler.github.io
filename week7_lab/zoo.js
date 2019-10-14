function myElephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "elephant";
  this.image = "elephant.jpg";
}

function myTiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = "tiger";
  this.image = "tiger.jpg";
}

function myGiraffe(name, age) {
  this.name = name;
  this.age = age;
  this.type = "giraffe";
  this.image = "giraffe.jpg";
}

var animals = [new myElephant(), new myTiger(), new myGiraffe()];
var animalNames = ["Dax", "Jojo", "Garbo"]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random()*maxIndex);
}

function generateRandomName() {
  return generateRandomIndex(animalNames.length - 1);
}

var randomNameIndex = animalNames[generateRandomName()]

//how to access index in array? e-i-3

function generateRandomAge() {
  generateRandomIndex(maxIndex);
}
