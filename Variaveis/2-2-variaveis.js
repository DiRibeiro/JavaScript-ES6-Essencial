let test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        let test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();