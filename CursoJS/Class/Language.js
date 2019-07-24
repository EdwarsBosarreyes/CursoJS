function Language(type, name, age){
    this.type = type;
    this.name = name;
    this.age = age;
    Programmers.prototype.constructor.call(this.name,this.age);
}

Language.prototype = new Programmers();
Language.prototype.language = function(){
    alert(this.type);
}