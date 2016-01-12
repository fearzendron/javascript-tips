function validate(obj) {
    return !!obj;
}

var obj = undefined;
var obj2 = null;
var obj3 = "";
var obj4 = {};
var obj5 = [];
var obj6 = "teste";
var obj7 = {"TESTE":"TESTE"};
var obj8 = [{}];
var obj9 = [{"TESTE":"TESTE"}];


console.log("UNDEFINDED");
console.log(validate(obj));
console.log("**************************\n");

console.log("NULL");
console.log(validate(obj2));
console.log("**************************\n");

console.log("\"\"");
console.log(validate(obj3));
console.log("**************************\n");

console.log("{}");
console.log(validate(obj4));
console.log("**************************\n");

console.log("[]");
console.log(validate(obj5));
console.log("**************************\n");

console.log("\"TESTE\"");
console.log(validate(obj6));
console.log("**************************\n");

console.log("{\"TESTE\":\"TESTE\"}");
console.log(validate(obj7));
console.log("**************************\n");

console.log("{[]}");
console.log(validate(obj8));
console.log("**************************\n");

console.log("[{\"TESTE\":\"TESTE\"}]");
console.log(validate(obj9));
console.log("**************************\n");
