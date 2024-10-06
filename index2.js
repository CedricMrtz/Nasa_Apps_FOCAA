//Index Parte 1

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
//slider.oninput = function() {  };


//Index Parte 2

import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight-100;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
const controls = new OrbitControls(camera, renderer.domElement);

// Geometría de la Tierra
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({
    map: loader.load("https://i.ibb.co/rymLrxV/earthmap1k.jpg"),
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

// Geometría de las luces de la Tierra
const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load("./textures/03_earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

// Geometría y material de la luna
const moonGeometry = new THREE.SphereGeometry(0.27, 12, 12);
const moonMaterial = new THREE.MeshStandardMaterial({
    map: loader.load("./assets/moonmap4k.jpg"),
});
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
earthGroup.add(moonMesh);

// Posición de la luna
moonMesh.position.set(1.5, 0, 0);

// Añadir la aurora al grupo de la Tierra
const cloudTexture = loader.load("./assets/Aurora.png");  // Carga una textura de nube
const spriteMaterial = new THREE.SpriteMaterial({ map: cloudTexture, transparent: true, opacity: 0.7 });
const cloudSprite = new THREE.Sprite(spriteMaterial);
cloudSprite.scale.set(1, 1, 1); // Ajustar tamaño de la nube
cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
const text = document.querySelector('.Cedric')
//Switch para definir las propiedades de la aurora
slider.oninput = function() {
    const sliderValue = parseInt(slider.value);  // Convertir el valor del slider a número
    
    switch (sliderValue) {  // Usar el valor numérico para las comparaciones
        case 3:
            cloudSprite.scale.set(1, 1, 1); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra

            text.innerHTML = 'Notable solar flares were observed coming from 2 regions of the sun called “AR13663” and “AR13664”';
            break;
        case 4:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Notable solar flares were observed coming from 2 regions of the sun called “AR13663” and “AR13664”';
            break;
        case 5:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Notable solar flares were observed coming from 2 regions of the sun called “AR13663” and “AR13664”';
            break;
        case 6:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.0, 0.3, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'The most intense flare occurred, being of a X4.5 intensity. though it would take a few days to show any impact on our planet.';
            break;
        case 7:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(.8, 0.1, -0.8);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'The first signs of the solar storm started late on May 7th with two strong solar flares. followed by more solar flares directed towards the planet earth.';
            break;      
        case 8:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.1, 0.1, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'The CMEs are rapidly approaching the atmosphere of the earth.';
            break;
        case 9:
            cloudSprite.scale.set(2, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.4, 0.4, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'the collision with earth is fast approaching and will occur in a few hours.';
            break;
        case 10:
            cloudSprite.scale.set(3, 3, 4); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Aurora borealis became visible on some regions of the planet (some of them including the United States, Mexico, Jamaica, Spain, Algeria, Africa, etc.).'
            break;
        case 11:
            cloudSprite.scale.set(3, 3, 4); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Some of the aurorae were still visible in some areas of the world, some without the need of amplification devices such as cameras or telescopes.';
            break;      
        case 12:
            cloudSprite.scale.set(3, 3, 4); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'the aurorae started to dissipate but some issues still persist.';
            break;
        case 13:
            cloudSprite.scale.set(1, 1.5, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'While some residues still cause some issues, they have become weaker overall.';
            break;
        case 14:
            cloudSprite.scale.set(.8, 1, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Its here where most effects surrounding the storm have ceased to affect the earth, though a next solar flare would make an act of present.';
            break;
        case 15:
            cloudSprite.scale.set(3, 2, 3); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            text.innerHTML = 'Is on this day when the effects of the CMEs ejected by the sun collide with the planet once again, increasing the chances of aurorae appearing in the sky exponentially.';
            break;
        default:
            cloudSprite.scale.set(1, 1, 1); // Ajustar tamaño de la nube
            cloudSprite.position.set(1.2, 0.2, -0.5);  // Posición fija de la nube en la Tierra
            break;
    }

    // Cambiar el texto según el valor del slider
    if (sliderValue === 3) {
        output.innerHTML = "May " + sliderValue + "rd";
    } else {
        output.innerHTML = "May " + sliderValue + "th";
    } 
};




// Añadir la nube al grupo de la Tierra para que gire con ella
earthGroup.add(cloudSprite);

// Campo de estrellas
const stars = getStarfield({ numStars: 2000 });
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);
// Crear el botón
const button = document.createElement('button');
button.textContent = 'Discover It';
button.style.marginTop = '10px'; // Espacio entre el texto y el botón
button.style.padding = '10px 20px'; // Espaciado del botón
button.style.fontSize = '15px'; // Tamaño de fuente del botón
button.style.cursor = 'pointer'; // Cambia el cursor al pasar por encima
button.style.height = '50px'; // Ajusta la altura del botón
button.style.width = '120px'; // Ajusta el ancho del botón
button.style.marginLeft='130px';

// Añadir el evento de clic al botón
button.onclick = function() {
    window.location.href = 'https://n9.cl/1rmj9'; // Cambia esto por el enlace deseado
};

// Añadir el botón al div de advertencia



// Texto de advertencia
const lineBreak = document.createElement('br');
const warningDiv = document.createElement('div');
warningDiv.style.position = 'absolute';
warningDiv.style.top = '50%';
warningDiv.style.left = '50%';
warningDiv.style.transform = 'translate(-50%, -50%)';
warningDiv.style.color = 'white';
warningDiv.style.fontSize = '2em';
warningDiv.style.display = 'none'; // Oculto por defecto
warningDiv.textContent = 'What do you think is out here?';
document.body.appendChild(warningDiv);
warningDiv.appendChild(lineBreak);
warningDiv.appendChild(button);



// Ajuste de tamaño al redimensionar la ventana
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});

function animate() {
    requestAnimationFrame(animate);
    earthMesh.rotation.y += 0.002; 
    lightsMesh.rotation.y += 0.002;
    earthGroup.rotation.y += 0.002;

    // Rotar la luna alrededor de la Tierra
    moonMesh.position.x = 1.5 * Math.cos(Date.now() * 0.001);
    moonMesh.position.z = 1.5 * Math.sin(Date.now() * 0.001);

    // Rotar la nube alrededor de la Tierra (si quieres que la nube gire)
    //cloudSprite.position.x = 2 * Math.cos(Date.now() * 0.001);
    //cloudSprite.position.z = 2 * Math.sin(Date.now() * 0.001);

    // Ocultar estrellas si el zoom es demasiado alejado
    if (camera.position.z > 1000) {
        stars.visible = false;  // Desaparecen las estrellas
    } else {
        stars.visible = true;   // Las estrellas son visibles
    }

    // Mostrar leyenda si las estrellas ya no son visibles
    if (camera.position.z > 1010) {
        warningDiv.style.display = 'block';  // Mostrar el texto
        
    } else {
        warningDiv.style.display = 'none';   // Ocultar el texto

    }

    renderer.render(scene, camera);
}

animate();