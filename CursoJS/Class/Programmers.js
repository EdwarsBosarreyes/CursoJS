function Programmers(name, age){
    /*this.name = name;
    this.age = age;*/
}
//Prototype sirve para obtener las variables de una funcion
//Javascriptes el nombre de la funcion
Programmers.prototype.Javascript = function(){
    alert(this.name+" "+this.age);
}