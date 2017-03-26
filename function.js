
console.log("***************************************\n");
console.log("***************************************\n");
console.log("Funções\n");
console.log("***************************************\n");
console.log("***************************************\n");

function teste() {
    console.log("Função padrão\n");
};

var funcao = function fnc() {
    console.log("Função em uma variável mas não anônima\n");
};

var funcao1 = function() {
    console.log("Função em uma variável anônima\n");
};

teste();
funcao();
funcao1();

console.log("IIFE Imediately Invocable Function Expressions\n");
(
    function() {
        console.log("Executado\n");
    }
)();


/*
    The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object.
    Note that GeneratorFunction is not a global object. It could be obtained by evaluating the following code.
*/
function *generator () {
    yield 1;
    yield 2;
    yield 3;
}

var genObject = generator();
console.log("Generator Functions\n");
console.log(genObject.next().value);
console.log(genObject.next().value);
console.log(genObject.next().value);


// ************************************************************************************************
//Arrow function

var method = param => {
    console.log(param * 2);
}

method(2);


// ************************************************************************************************
// Shorter Functions

var material = [
    "madeira",
    "helio",
    "ferro",
    "ar"
];

var materialLength = material.map(function(material) {
    return material.length;
});

var materialLength1 = material.map(material => { return material.length });
var materialLength2 = material.map(material => material.length);

console.log("******************************************************************************");
console.log("Shorter functions");
console.log("******************************************************************************");
console.log(materialLength);
console.log(materialLength1);
console.log(materialLength2);