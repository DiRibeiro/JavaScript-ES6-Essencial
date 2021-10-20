//in
something in somethingItems

//Array
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
"cedro" in arvores; //retorna false (Você deve especificar o número so índice,
                    //não o valor naquele índice)
"length" in arvores; //retorna true (length é uma propriedade de Array)                    

//Objetos predefinidos
"PI" in Math; //retorna true
var minhaString = new String("coral");
"length" in minhaString; //returna true

//Objetos personalizados
var meuCarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
};
"marca" in meuCarro; //returna true
"modelo" in meuCarro; //retorna true

//instaceof : verifica se o objeto é a instance de algo
objeto instanceof tipoObjeto

var dia = new Date(2021, 10, 01);

if (dia instanceof Date) {
    //code here
}