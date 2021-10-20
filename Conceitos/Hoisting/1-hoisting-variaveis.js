//Hoisting significa levantar ou suspender algo

//Variáveis
function fn() {
    console.log(text);//undefined

    var text = 'Exemplo';

    console.log(text);
}

fn();

/**
 * function fn() {
 * var text;
 * console.log(text);
 * 
 * text = 'Exemplo';
 * 
 * console.log(text);
 * }
 */