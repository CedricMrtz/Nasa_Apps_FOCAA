function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    if (image.style.display === "none" || image.style.display === "") {
        image.style.display = "block"; // Mostrar la imagen
    } else {
        image.style.display = "none";  // Ocultar la imagen
    }
}
