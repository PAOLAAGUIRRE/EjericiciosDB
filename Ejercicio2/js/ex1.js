//Ejercicio 1
console.log("Este es ex1.js")

//Ejercicio 2
var nombre = "paola"
var apellido = "Aguirre Herrera"
var añoNacimiento = 1985
var añoActual = 2021
var edad = añoActual - añoNacimiento
document.getElementById("student_message").innerHTML = "“Hola, mi nombre es " + nombre + " " + apellido +  " tengo " + edad + " años y estoy aprendiendo JavaScript”.‎"

//Ejercicio 3
var num_1 = document.getElementById("num_1").value
var num_2 = document.getElementById("num_2").value
if (!num_1)
    num_1 = 101
if (!num_2 )
    num_2= 7
var promedio = (num_1 + num_2) / 2
document.getElementById("result").innerHTML = promedio.toFixed(2)

//Ejercicio 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();
console.log(phone1.length == 9)
console.log(phone2.length == 9)
console.log(phone3.length == 9)


//Ejercicio 5
var num1= 32
var potencia= 6
var resultado = Math.pow(num1,potencia)
console.log(resultado)

//Ejercicio 6
var res_a = "var NAME"
var res_b = "var $num1"
var res_c = "var typeof"
var res_d = "var first-name"
var res_e = "var attempt_2"
var res_f = "var 2ndAttempt"
var res_g = "var full name"
console.log(res_a + ": Válida, aunque no se debería tener todo en mayúscula")
console.log(res_b + ": válida")
console.log(res_c + ": No válida, porque es una palabra reservada")
console.log(res_d + ": No sirve, las variables no llevan guión medio")
console.log(res_e + ": válida")
console.log(res_f + ": No válida, las variables no deben empezar con números")
console.log(res_g + ": No válida, las variables no deben llevar espacios")

//Ejercicio 7
//var quantity = "25";
//var number = 6;
// var pressure;
// var temperature = null;

// console.log(quantity += quantity); 
// console.log( (7+5) / number + 2 ); 
// console.log(pressure); 
// console.log(temperature); 
// console.log(typeof pressure); 
// console.log(typeof temperature);
// console.log(2525)
// console.log(4)
// console.log("undefined porque no se le esta asignando ningun valor")
// console.log(null)
// console.log(null)

//Ejercicio 8
var url1 = "www.sena.edu.co"
var url3 = "https://www.google.com"
document.getElementById("url_2").innerHTML = url1.replace("www.sena.edu.co", "https://www.sena.edu.co")
document.getElementById("url_4").innerHTML = url3.replace("https://www.google.com", "www.google.com")