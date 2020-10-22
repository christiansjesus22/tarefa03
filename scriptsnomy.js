let nomy = prompt("ingrese seu nomy");
let sobreNomy = prompt("ingrese sobre nomy ");
let edade = prompt("ingrese sua edade");

console.log("hola" +" " +nomy +" " +sobreNomy +" " +"sua edade é" +" " +Number(edade));

/* forma 2 */

let nomy = prompt("ingrese seu nomy");
let sobreNomy = prompt("ingrese sobre nomy ");
let edade = prompt("ingrese sua edade");
    edade = Number(edade);

console.log("hola" +" " +nomy +" " +sobreNomy +" " +"sua edade é" + " " +edade);

/* tabela */ 

let nomy = prompt("ingrese seu nomy");
let sobreNomy = prompt("ingrese sobre nomy ");
let edade = prompt("ingrese sua edade");
let edadeNumero = Number(edade);
console.table({user:nomy, subUser:sobreNomy, age:edadeNumero})


var person01 = { name: "", age: 0, birthMonth: "" };
var person02 = { name: "", age: 0, birthMonth: "" };

person01.name = prompt("ingresse nomi01");
person01.birthMonth = prompt("ingrese mes de nacimento01");
person01.age = prompt("ingrese sua edade01");

person02.name = prompt("ingresse nomi02");
person02.birthMonth = prompt("ingrese mes de nacimento02");
person02.age = prompt("ingrese sua edade02");

function moreold() {
  if (person01.age > person02.age) {
    return console.log(person01.name + " " + "es mayor");
  } else {
    return console.log(person02.name + " " + "es mayor");
  }
}