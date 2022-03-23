var personaje  = function(x,y,nombre){
    this.x = x;
    this.y = y;
    this.nombre = nombre;
    
    //metodo
    this.abajo = function (pixeles){
        this.y += pixeles;
    }

    this.saludar  = function (){
       console.log ("Hola forastero, soy " + this.name)
    }
}

var personaje1  = new personaje(200,100,"Frodo");
var personaje2  = new personaje(120,50,"Sam");