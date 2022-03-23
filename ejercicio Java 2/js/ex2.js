//solución 1
function convFahr(celcius) {
    var Fahrenheit = (9 * celcius / 5) + 32;
    return Fahrenheit;
}
var grados1 = parseFloat(document.getElementById("celsius_1").innerHTML)
document.getElementById("fahr_1").innerHTML = convFahr(grados1);

var grados2 = parseFloat(document.getElementById("celsius_2").innerHTML)
document.getElementById("fahr_2").innerHTML = convFahr(grados2);

var grados3 = parseFloat(document.getElementById("celsius_3").innerHTML)
document.getElementById("fahr_3").innerHTML = convFahr(grados3);

//solución 2
var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
document.getElementById("best_students").innerHTML = (classification.slice(-3))

//solución 3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    "totalEstrellas": function () {
      return  this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_stars_reviews'];
    }
}
var total5_stars = course['5_stars_reviews'] * 100 / course.totalEstrellas()

document.getElementById("course_title").innerHTML = (course.title)
document.getElementById("main_category").innerHTML = (course.categories[0])
document.getElementById("reviews_5_stars").innerHTML = total5_stars.toFixed(0) + "%"

//solución 4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

 var ultimo = shoppingList.pop()
 shoppingList.unshift(ultimo)
 shoppingList.push("cheese" , "eggs")
 console.log(shoppingList)