var now = new Date();
var datetime = now.toLocaleDateString();

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Establecer estilo para el contorno del texto
output.style.textShadow = 
    '-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff';
    output.style.fontFamily='Franklin Gothic Medium'; // Contorno blanco
output.innerHTML = "May " + slider.value + "rd"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    if (slider.value == 3) {
        output.innerHTML = "May " + this.value + "rd";
    } else {
        output.innerHTML = "May " + this.value + "th";
    } 
};
