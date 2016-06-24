console.log('hello world');

var bananaSandwich = {shape: 'round'};

function drive() {
  console.log('Vroom vroom!');
  console.log('this = ', this);
}

var car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  drive: drive,
  passengers: [{name: 'Ryan'}, {name: 'Joel'}],

};

car.steeringWheel =  bananaSandwich;

console.log(car.type);


var propertyName = 'model';
console.log(car[propertyName]);

car.type = 'Honda';

console.log(car.type);

car.drive();

console.log(car.steeringWheel.shape);

console.log(car.passengers[1].name);


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.shoeSize = 9;

  this.getDisplayName = function() {
    return this.firstName + ' ' + this.lastName;
  }
  return this;
}

var ryan = new Person('Ryan', null, 25, 'Hazel');
