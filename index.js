
//var function

var button=document.getElementById("nombre");
button.addEventListener("click",myFunction);

var now = new Date();
var datetime = now.toLocaleDateString();
/*
for(let i=0;i<datetime.length;i++){
    let thing=datetime.charAt(i);
    console.log(thing);
    if(thing==("/")){
        console.log("Yay");
    }
}
    */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

document.getElementById("datetime").innerHTML = datetime;

function myFunction(){
    console.log("funciona2");
let person = prompt("Please enter your name ", "User");
if(person!= null){
    document.getElementById("Fernando").innerHTML =
    "Hello "+person+ "!";
}
console.log(person);
}