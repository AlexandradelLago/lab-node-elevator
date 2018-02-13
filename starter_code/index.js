// aqui me estoy trayendo los archivos js en nodejs

const Elevator = require('./elevator.js');
const Person = require ('./person.js');

let myElevator = new Elevator();


let myPerson1 = new Person("davinia","3","8");
let myPerson2 = new Person("carlos","1","5");
let myPerson3 = new Person("juan","0","4");
let myPerson4 = new Person("estefania","10","0");

myElevator.call(myPerson1);
myElevator.call(myPerson2);
myElevator.call(myPerson3);
myElevator.call(myPerson4);

// console.log(myElevator);

// console.log(myElevator.requests);
// console.log(myElevator.waitingList);
// console.log(myElevator.requests[0]);

myElevator.start();








