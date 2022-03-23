//ejercicio 1
var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
};

document.getElementById("shipments").onchange = function () {
    var selectedOption= document.getElementById("shipments").value;
    var dias = shipments[selectedOption].leadTime;
    var costo = shipments[selectedOption].fee;
    
    var fechaPedido = new Date();
    var fechaEntrega = new Date(fechaPedido.getTime() + (86400000*dias));
   

    document.getElementById("order_date").innerHTML = fechaPedido.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = fechaEntrega.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = costo.toFixed(2);
    
    
}

//ejercicio2
var phones =  {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': 450,
                'currency': 'US$',
                'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574260319"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': 869,
                'currency': 'EUR',
                'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': 519,
                'currency': 'US$',
                'imageUrl': "https://ventaspop-images.s3-us-east-2.amazonaws.com/files/products/569/546/iphone8-plus-silver-select-2018.png"
            }
};

var radioItems = document.getElementsByName("product"); 

for (var a = 0; a<radioItems.length; a ++) {  
    radioItems[a].onchange = function(){   
        for (var b = 0; b<radioItems.length; b++) {  
           if (radioItems[b].checked){ 
               var selectOption = radioItems[b].value;
                console.log(selectOption);
                document.getElementById("phone_name").innerHTML = phones[selectOption].name;
                document.getElementById("phone_price").innerHTML = (phones[selectOption].currency) + phones[selectOption].price.toFixed(2);
                document.getElementById("phone_image").src = phones[selectOption].imageUrl;

           }
        }
    }
}    

//ejercicio 3

var runningCronometro = false,
starTime,
presentTime,
elapseTime = 0,
clockInterval,
hour,
minutes,
seconds,
remainder,
formattedTime;

function formato(number){
    if(number < 10){
        return "0" + number.toString();
    } else{
        return number.toString();
    }
}

document.getElementById("start_stop").onclick = function (){
    
    if(!runningCronometro){  
        runningCronometro = true;

        if(elapseTime==0){
            starTime = new Date().getTime();
        }else{
            starTime = new Date().getTime() - elapseTime;
        }  

        clockInterval = window.setInterval(function(){            
            presentTime = new Date().getTime();
            elapseTime = presentTime - starTime;
            //para hora 3600000
            //minuto 60000
            //segundos 1000
            hour = Math.floor(elapseTime/3600000);
            remainder = elapseTime - (hour*3600000);

            minutes = Math.floor(elapseTime/60000);
            remainder -= (minutes*60000);

            seconds = Math.floor(elapseTime/1000);
            remainder -= (seconds*1000);

            formattedTime = formato(hour) + ":" + formato(minutes) + ":" + formato(seconds) + ":" + formato(remainder);
            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10);
    } else{
        //para detenerlo
        window.clearInterval(clockInterval);
        runningCronometro = false;

    }
}

document.getElementById("reset").onclick = function(){
    starTime = new Date().getTime();
    if(!runningCronometro){
        elapseTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
        //alert(starTime)
    }

}