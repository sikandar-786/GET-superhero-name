//third which is external api inwhich api is used

const superheroes = require("superheroes");

const supervillains = require("supervillains");

console.log(superheroes.random());
console.log(supervillains.random());

// Display a Versus
console.log(superheroes.random() + " vs " + supervillains.random());
