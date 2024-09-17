console.log(`teste`);    // teste funcionamento

function sum(param, ...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

// recebendo varios parametros
console.log(sum(1,1))
console.log(sum(1,1,5,6,7,8))
console.log(sum(1,12,576,1))