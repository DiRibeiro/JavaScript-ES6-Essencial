this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Name no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());