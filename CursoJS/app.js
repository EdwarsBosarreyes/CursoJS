/*for (var i = 0; i < 5; i++) {
    console.log("JavaScript "+i);
    
}*/


/*var app = function(){
    var numero_1 = 3;
    var numero_2 = 1;    
    var cadena = " Resultado";
    var decimal = 9.5;
    var valor = false;
    var resultado = numero_1 + numero_2;
    var cadenas = resultado + cadena;
    var dias = ["Lunes", "Martes", valor, "Jueves", "Viernes", numero_1, "Domingo"];
    var dia = dias[5]
    console.log(dias[dia]);
    alert(dias[3]);

    numero_1--;
}

OPERADORES
Asignacion
=
Incremento y decremento
++, --
Logicos
negacion
!
AND
&& valoracion y logica
OR
|| valoracion y logica
Matematica
+,-,*,/
Relacionales                                                                       
mayor que (>), menor que (<), mayor o igual que (>=), menor o igual que (<=), igual que (==) y distinto de (!=).

los operadores &, | valoran ambos lados del argumento y deciden el resultado. Los operadores && y || pueden emplearse para evitar la valoracion de los operandos de la derecha, si la valoracion es necesaria.
*/

/*var valor = true;
var dato1 = 5;
var dato2 = "hola";
if(dato1 > 4){
    console.log("Entramos a la condicion");
}else{
    console.log("Estamos en el Else");
}*/

//FOR IN
/*var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

for (var key in dias) {
    //console.log(dias[key]);
}


//Foreach (Se utiliza cuando se tiene un array)

dias.forEach(element => {
    console.log(element);
});
*/

//switch

/*var count = "Hola";

switch (count) {
    case 1:
        console.log("El dato es "+count);
        break;
    case "Hola":
        console.log("El dato es "+count);
        break;

    default:
        console.log("El dato no existe ");
        break;
}*/


//Funciones en JavaScript

//var valor;
//var prueba = function /*prueba*/(valor){
/*    console.log("Hola "+valor);
    var dato = "Hola";
    console.log("El dato es "+dato);
}

prueba("putos");
*/

//While and Do While
/*var valor = true;
var count = 0;*/
 
/*while (count < 3) {
    if (count == 3) {
        valor = false;
        console.log("Se detuvo el while");
    }
    count++;
} 
*/

/*
do {
    if (count == 3) {
        valor = false;
        console.log("Se detuvo el while");
    }
    count++; 
} while (valor);
*/

//var app = function(){
    /*var Programmer = new Programmers("Edwars",26);
    Programmer.Javascript();*/
  /*  var language = new Language("Javascript","Alex", 20);
    language.Javascript();
    language.language();
}*/


// toLowerCase(), convierte el texto a minuscula
//toUpperCase(), convierte el texto a mayuscula
//charAt(posicion), obtiene el caracter que se encuentra en la posicion indicada

/*indexOf("caracter"), calcula la posicion en la que se encuentra este caracter 
indicado dentro de la cadena de texto, si el caracter se incluye varias veces dentro 
de la cadena de texto, se devuelve su primera posicion empezando a buscar desde la izquierda.
 Si la cadena no contiene el caracter, la funcion devuelve el valor -1 */

 /*lastIndexOf(caracter), calcula la ultima posicion en la que se encuentra el caracter
 indicado dentro de la cadena de texto. Si la cadena no contiene el caracter, la funcion
 devuelve el valor -1 */

 /* substring(inicio, final), extrae una porcion de una cadena de texto. El segundo parametro
es opcional. Si solo se indica el parametro de inicio, la funcion devuelve la parte de la cadena
original correspondiente desde esa posicion hasta el final*/

/* split(separador), convierte una cadena de texto en un array de cadenas de texto. La funcion 
parte la cadena de texto predeterminando sus trozos a partir del caracter separador indicado */

//function app(cadena){
    /*var name = ["Alex", "Pagodda"];
    var lastname = ["p", "a", "g", "o", "a", "d", "a"];
    var lenght = name.length;*/

    //concat(), se emplea para concatenar los elementos de varios arrays
    /*join(separador), es la funcion contraria a split(). Une todos los 
    elementos de un array para 
    formar una cadena de texto. Para unir los elementos se utiliza el 
    caracter separador indicado*/
    //var array = name.concat(lastname);
    //var mensaje = name.join("/");

    /*pop(), elimina el ultimo elemento del array y lo devuelve. El array original 
    se modifica y su longitud disminuye en 1 elemento */
    //var array = [1, 2, 3];
    //var last = array.pop();

    /*push, agrega un elemento al final del array. El array original se modifica y aumenta
    su longitud en 1 elemento. (Tambien es posible agregar mas de un elemento a la vez) */
    //var lenght = array.push(4);

    /*shift, elimina el primer elemento del array y lo devuelve. El array original 
    se ve modificado y su longitud disminuye 1 en 1 elemento*/
    //array.shift();
    /*unshift(), agrega un elemento al inicio del array. El array original se modifica 
    y aumenta su longitud en 1 elemento. (Tambien es posible agregar mas de un elemento a la vez)*/
    //array.unshift(0, 1);
    
    /*reverse(),  modifica un array colocando sus elementos en el orden inverso a su posicion original*/
    /*array.reverse(); 
    alert(array);*/

    /*var language = new Language("Javascript", "Alex", 20);
    language.Javascript();
    language.language();*/
    
    /*
    var cadena = "Videos de programacion en Javascript";
    var letras = cadena.split("");
    var mensaje = "";
    for (var key in letras) {
        if (letras[key] == 'J') {*/
            //break;
       /* }else{
            mensaje += letras[key];
        }
    }
    return mensaje;
}

var fun = function(fn){
    var result = fn();
    alert(result);
};

var funct = function(){
    return "Javascript";
};*/

//Funcion anonima
//(function(){
  //  fun(funct);
    //fun(function(){return "Javascript";});
    //funct();
   /* var cadena = "Videos de programacion en Javascript";
    alert(app(cadena));*/
//})();

var getData = function(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (name == "") {
        document.getElementById("name").focus();
    }else{
        if (age =="") {
            document.getElementById("age").focus();

        } else{
            //Validar que el dato age sea numerico
            if(!isNaN(age)){
                //console.log(name+" "+age);
                var user = new Users(name,age, "PHP/insert.php");
                user.AddUser();
                document.getElementById("name").value = "";
                document.getElementById("age").value = "";
                document.getElementById("name").focus();
            }else{
                alert("Debes Ingresar una edad valida");
            }
            
        }
    }

    
}
 