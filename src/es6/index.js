//Antes de  es6
function newFunction(name, age, country) {
    var name = name || 'Guadalupe';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name, age, country);
}
newFunction();

//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'Colombia');

//antes de es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let hello = "Hello";
let world = "World";
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//antes de es6
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n" + "harum reiciendis dolorem? Eum asperiores eius id quae!"
console.table(lorem);

// es6
let lorem2 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Tempora quis dolorem itaque labore doloribus beatae nemo, suscipit voluptatum.`;
console.table(lorem2);

let person = {
    'name': 'Guadalupe',
    'age': 26,
    'country': 'MX'
}
//antes
console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age);

//es6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//es6
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//es6
var a = 'b';
a = 'a';

console.log(a);

// Parametros en objetos
let name = 'Guadalupe';
let age = 26;

//es5
obj = { name: name, age: age };

//es6
obj2 = { name, age };
console.log(obj2)

//arrow function
const names = [
    { name: 'Guadalupe', age: 26 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

//
const listOfNames3 = (name, age, country) => {
    //... lista de codigo
}

//
const listOfNames4 = name => {
    //... lista de codigo
}

//
const square = num => num * num;

//promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    //.then(() => console.log('hola'))
    .catch(error => console.log(error));

