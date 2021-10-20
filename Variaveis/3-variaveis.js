const name = 'Diego';

//Não podemos alterar o valor
name = 'Diego';

const user = {
    name: 'Diego'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "Apontar" para outro lugar
user = {
    name: 'Diego'
};

const persons = ['Diego', 'Pedro', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);