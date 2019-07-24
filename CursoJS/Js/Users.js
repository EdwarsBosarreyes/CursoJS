function Users(name, age, action){
    this.action = action;
    this.name = name;
    this.age = age;
}

Users.prototype.AddUser = function(){
    console.log(this.name + " " + this.age);
    $.ajax({
        type: "POST",
        url: this.action,
        data: { name: this.name, age: this.age },
        success: function (response){
            if(response == 1){
                alert("Datos Insertados");
            }
        }
    });
}