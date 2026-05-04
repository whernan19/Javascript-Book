//Implementa un retorno implicito
/*Syntax

() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}*/

let total = (a,b) => a*b;
let result = total(1,2);
console.log(result);