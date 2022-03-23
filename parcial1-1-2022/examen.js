//Ejericio 1
document.getElementById("Suma").onclick=function(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var sumaNum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("mensaje").innerHTML="El resultado es: " + sumaNum;
}

document.getElementById("Resta").onclick=function(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var restaNum = parseFloat(num1) - parseFloat(num2);
    document.getElementById("mensaje").innerHTML="El resultado es: " + restaNum;
}

document.getElementById("Multiplicacion").onclick=function(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var multipliNum = parseFloat(num1) * parseFloat(num2);
    document.getElementById("mensaje").innerHTML="El resultado es: " + multipliNum;
}

document.getElementById("Division").onclick=function(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var diviNum = parseFloat(num1) / parseFloat(num2);
    document.getElementById("mensaje").innerHTML="El resultado es: " +  diviNum;
}

//Ejericio 2


document.getElementById("cuadrado").onmouseover = function(){
    document.getElementById("cuadrado").style['backgroundColor']="red";
}    

document.getElementById("cuadrado").onmouseout = function(){
    document.getElementById("cuadrado").style['backgroundColor']="";
}   
// function dame_color_aleatorio(){
//     hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
//     color_aleatorio = "#";
//     for (i=0;i<6;i++){
//        posarray = aleatorio(0,hexadecimal.length)
//        color_aleatorio += hexadecimal[posarray]
//     }
//     return color_aleatorio
//  }

//Ejericio 3

document.getElementById("Calcular").onclick=function(){
    var peso1 = document.getElementById("peso").value;
    var estatura1 = document.getElementById("estatura").value;
    var calcula = parseFloat(peso1) / (parseFloat(estatura1) * parseFloat(estatura1)) ;
    document.getElementById("mensaje2").innerHTML="El resultado de su IMC es : " + calcula ;
}



