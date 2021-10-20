function getNome() {
    return 'Diego José da Silva Ribeiro';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);