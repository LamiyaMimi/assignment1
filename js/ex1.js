

console.log("ggjgjg");

document.getElementById("student_message").innerHTML = "my name is Lamiya Mimi, I'm 22 years old and I'm learning Javascript";

document.getElementById("result").innerHTML = "14.429";


var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = "876543123";

if(phone1.length ==9){
    console.log(phone1+ "is valid")
}else{
    console.log(phone1+ "is not valid")
}

if(phone2.length ==9){
    console.log(phone1+ "is valid")
}else{
    console.log(phone3+ "is not valid")
}

if(phone3.length ==9){
    console.log(phone1+ "is valid")
}else{
    console.log(phone3+ "is not valid")
}

var power = Math.pow(32,6);  
console.log(power)


var getAddress = document.getElementById("url_1").innerText;
var modifiedAddress = getAddress + " " +"https:// here";

document.getElementById("url_2").innerText = modifiedAddress;




                

var getAddress = document.getElementById("url_3").innerText;
var replace = getAddress + "https:// here";

document.getElementById("url_4").innerText = replace;





var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);
