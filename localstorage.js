if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

var rKey = require("random-key");

localStorage.removeItem("myFirstKey");

var numb = rKey.generate(10);

localStorage.setItem('myFirstKey', numb);


var logFormated = 
"\n\n  ********* DADOS DO LOCALSTORAGE ************** \n\n" +
"Key Recorded: " + localStorage.getItem('myFirstKey') + "\n" +
"Length: " + localStorage.length + "\n";

console.log(logFormated);