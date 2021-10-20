const users = ['Diego', 'Mariana', 'Lucas'];

//Enum
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Diego',
        age: 27,
        gender: gender.MAN
    },
    {
        name: 'Mariana',
        age: 27,
        gender: gender.WOMAN
    },
    {
        name: 'Lucas',
        age: 8,
        gender: gender.MAN
    }
]

//Retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

//Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course: ', personsWithCourse);

//Transformar um array em putro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);    