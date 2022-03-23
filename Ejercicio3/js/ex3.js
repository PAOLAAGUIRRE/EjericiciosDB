// Ejercicico 1
document.getElementById("convert").onclick = function() {
    var fahr = parseFloat(document.getElementById("temp_celsius").value);
    
    if (fahr) {
        var Fahrenheit = (9 * parseFloat(fahr) / 5) + 32;
        document.getElementById("temp_fahr").innerHTML = Fahrenheit;
    } else {
        alert("Invalido");
    }
}

// Ejercicico 2
document.getElementById("anos_copa").innerHTML = "";
var año_actual = 2022;
while (año_actual <= 2050) {
    document.getElementById("anos_copa").innerHTML += "<li>" + año_actual + "</li>";
    año_actual += 4;
}
// Ejercicico 3
document.getElementById("calculate").onclick = function() {
    
    var nota_1 = parseFloat(document.getElementById("grade1").value);    
    var nota_2 = parseFloat(document.getElementById("grade2").value);  
    var ausencias  = parseFloat(document.getElementById("absences").value);   
    var promedio = (nota_1 + nota_2) / 2;
   
    if(promedio >= 6.5 && ausencias <= 6){
        document.getElementById("result").innerHTML = "Aprobó," + "la cantidad de ausencia fue de " + ausencias + " clases,con un promedio de notas de " + promedio; 
    }
    else if (promedio < 6.5 && ausencias <= 6){
        document.getElementById("result").innerHTML = "Réprobo," + "la cantidad de ausencia fue de " + ausencias + " clases,con un promedio de notas de " + promedio;   
    } 
    else if (promedio >= 6.5 && ausencias >= 6){
        document.getElementById("result").innerHTML = "Réprobo," + "la cantidad de ausencia fue de " + ausencias + " clases,con un promedio de notas de " + promedio;   
    } 
    else if (promedio < 6.5 && ausencias  >= 6){
        document.getElementById("result").innerHTML = "Réprobo," + "la cantidad de ausencia fue de " + ausencias + " clases,con un promedio de notas de " + promedio;   
    
    }
    else{ (nota_1 == 0 || nota_2 == 0 || ausencias == 0) 
        alert("Invalido, Hace falta ingresar informacion");
    }
   
   
};
// Ejercicico 4
var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }
];
document.getElementById("course_sales").innerHTML = "";
for (var compra = 0; compra <= sales.length; compra++) {
    if (sales[compra].refundRequested == null) {
        var salesList = sales[compra].student;
        var salesList1 = sales[compra].date;
        var salesList2 = sales[compra].amount;
        document.getElementById("course_sales").innerHTML += "<tr>" + "<td>" + salesList + "</td>" + "<td>" + salesList1 + "</td>" + "<td>" + salesList2 + "</td>" + "<tr>";
        var total_ventas = sales[0].amount + sales[1].amount + sales[3].amount + sales[4].amount;
        document.getElementById("total_sold").innerHTML = total_ventas;
    }
}