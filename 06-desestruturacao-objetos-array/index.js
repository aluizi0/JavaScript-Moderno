console.log(`teste`);

const person = {
    name: 'Aluizio',
    job: 'Developer',
    age: 22,
    parents: ["Alulol","Alulu"],
}

// Acesso normal
const name = person.name;

// Desestruturação
const {job, age, parents} = person;

console.log(`Nome: ${name}, Job: ${job}
parents: ${parents}`);

const [father, mother] = parents; // Desestruturação de array

console.log(`Pai: ${father}, Mãe: ${mother}`);

// Desestruturação em funções
function createUser({name, job, age, parents}) {
    const id = Math.floor(Math.random() * 9999);
    return{
        id,
        name,
        job,
        age,
        parents,
    }
}

const luke = createUser(person);

console.log(luke);