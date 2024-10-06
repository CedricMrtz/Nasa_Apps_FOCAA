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
output.innerHTML = "May "+slider.value+"rd"; // Display the default slider value
var datetime=output.innerHTML;
datetime = datetime + " Lmao";

console.log(typeof(datetime));
console.log(datetime);
// var datetime = output.innerHTML;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  if(slider.value==3){
    output.innerHTML = "May "+ this.value+"rd";
  } else {
    output.innerHTML = "May "+ this.value+"th";
  } 
  
} 

//document.getElementById("datetime").innerHTML = datetime;