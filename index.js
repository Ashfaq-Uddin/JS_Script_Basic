//This is here to go over some basics for JavaScript
//Use Live Server
//Create an index.html file for better Visualization

// first code
console.log('Hello World');

// variables

let firstName = 'Ashfaq';
let lastName = 'Ahmed';

console.log(firstName + lastName);

// constant

const ID = 0.3;
//ID=1; //error constant cannot be change

// JS has 2 categories of types Primitive types and Reference type 
//these are primitive
let age = 30;
let FirstName = 'Sayeem';
let IsApproved = false;
let LastName = undefined;
let Adress = null;
//check
typeof age;
typeof Adress;

//Reference type are Object, Array, Functions
//Object
let person = {
    name: 'Ashfaq',
    aged: 30
};
console.log(person);

//to acces a single property of the Object we can use either:-
//Dot Notation
person.name = 'Janothan';
console.log(person.name);
//or Bracket Noatation
person['name'] = 'Mary';
console.log(person['name']);

//Array
let Cars = ['Toyota', 'Bmw']; //Declaring An array
Cars[2] = 'Audi'; //Adding an item
console.log(Cars);
console.log(Cars[2]);
typeof Cars;
Cars[3] = 23; //Adding another item
console.log(Cars);
typeof Cars; //Array is dynamic and an object in JS

//Functions
//Functions is a logical set of instructions to do a task or calcutation

function meet(name, Lastname) {
    console.log('Hi!! my name is ' + name + ' ' + Lastname);
}

meet('Ahmed', 'Sayeem');

function square(number) {
    return number * number;
}
console.log(square(3));

//Arrow function

summ = (m, n) => {
    return m + n;
}
console.log(summ(3, 99));


//Normal Swap function 
    function swap(q, a, b) {
        let temp = q[a];
        q[a] = q[b];
        q[b] = temp;
    }