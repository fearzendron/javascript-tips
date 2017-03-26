function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

/*
   Calcula o fatorial de um numero
*/
function fatorial(num) {
    var x = num;
    while (x > 1) {
        num *=x-1;
        x--;
    }
    return num;
}

console.log(fatorial(5));