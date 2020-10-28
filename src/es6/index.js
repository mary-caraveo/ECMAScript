//Antes de 
function newFunction(name, age, country) {
    var name = name || 'Guadalupe';
    var age = age || 26;
    var country = country || 'MX';
    console.log(name, age, country);
}

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
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);