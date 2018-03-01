let numeros  = [1, 7, 4, 10, 12, 15, 17, 19.23,343,454,2,3,244,5,6,3];

let pares =[];
let impares = [];

// if (10 % 2 == 0){


// 

for (let  numero of numeros){
    if (numero % 2 ==0){
        pares.push (numero)
    }
    else {
        impares.push (numero)
    }
        
}
console.log (`pares ${pares}`);
console.log (`impares ${impares}`);