
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
output.innerHTML = slider.value + " of May"; // Display the default slider value


var datetime=output.innerHTML;
datetime = datetime + " Lmao";

console.log(typeof(datetime));
console.log(datetime);
// var datetime = output.innerHTML;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + " of May";
} 

//document.getElementById("datetime").innerHTML = datetime; 