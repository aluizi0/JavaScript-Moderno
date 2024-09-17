const towns = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador', 'Belo Horizonte'];

console.log(towns); // ['São Paulo', 'Rio de Janeiro', 'Curitiba']
console.log(...towns); // São Paulo Rio de Janeiro Curitiba
console.log(...towns[0]); // S a o P a u l o

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push('Brasília');
console.log({towns, townsCopy}); // { towns: [ 'São Paulo', 'Brasília' ], townsCopy: [ 'São Paulo', 'Brasília' ] }

const townsClone = [...towns];
townsClone.push('Manaus');
console.log({towns, townsCopy, townsClone}); // { towns: [ 'São Paulo', 'Brasília' ], townsClone: [ 'São Paulo', 'Brasília', 'Manaus' ] }

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };
townsObjClone.test = 'test';

console.log({townsObj, townsObjClone}); // { townsObj: { '0': 'São Paulo', '1': 'Brasília' }, townsObjClone: { '0': 'São Paulo', '1': 'Brasília', test: 'test' } }