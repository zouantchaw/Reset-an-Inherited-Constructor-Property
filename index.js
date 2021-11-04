// duck.constructor and beagle.constructor should return their respective constructors


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog


let duck = new Bird();
let beagle = new Dog();

duck.constructor
beagle.constructor