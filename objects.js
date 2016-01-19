///////////////////////Number

var num = 0.8 + 0.7;
console.log("Type Number");
console.log(typeof num);
console.log("\n");


console.log("Para converter um String para Int basta usar parseInt");
var str = "15.4";
var srtToInt = parseInt(str);
console.log(srtToInt);

console.log(parseFloat("45.89"));
var a = parseInt("a");
if (isNaN(a)) {
    console.log("É NaN");
}

console.log(1 / 0);
console.log(-1 / 0);

console.log(isFinite(1 / 0));
console.log("\n\n")

////////////////////////String

console.log("Fernando zendron".length);
console.log("Fernando".charAt(2));

console.log("Fernando".replace("o", "os"));
console.log("e aeeee".toUpperCase());

console.log("\n\n")

/////////////////////// Boolean

console.log(Boolean(""));
console.log(Boolean("123"));

console.log("\n\n")

/////////////////////// Variables

var a;
