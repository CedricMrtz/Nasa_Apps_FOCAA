import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;
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

// Añadir la nube al grupo de la Tierra
const cloudTexture = loader.load("https://i.ibb.co/C1d1b22/cloud.jpg");  // Carga una textura de nube
const spriteMaterial = new THREE.SpriteMaterial({ map: cloudTexture, transparent: true });
const cloudSprite = new THREE.Sprite(spriteMaterial);
cloudSprite.scale.set(1, 1, 1); // Ajustar tamaño de la nube
cloudSprite.position.set(2, 0.5, -1);  // Posición fija de la nube en la Tierra

// Añadir la nube al grupo de la Tierra para que gire con ella
earthGroup.add(cloudSprite);

// Campo de estrellas
const stars = getStarfield({ numStars: 2000 });
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// Crear el div de advertencia
const warningDiv = document.createElement('div');
warningDiv.style.position = 'absolute';
warningDiv.style.top = '50%';
warningDiv.style.left = '50%';
warningDiv.style.transform = 'translate(-50%, -50%)';
warningDiv.style.color = 'white';
warningDiv.style.fontSize = '2em';
warningDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fondo oscuro con transparencia
warningDiv.style.padding = '20px'; // Añadir padding
warningDiv.style.borderRadius = '10px'; // Esquinas redondeadas
warningDiv.style.display = 'none'; // Oculto por defecto
warningDiv.textContent = 'What do you think is out here?';

// Crear un salto de línea
const lineBreak = document.createElement('br');
warningDiv.appendChild(lineBreak);
warningDiv.appendChild(lineBreak);
warningDiv.appendChild(lineBreak);
warningDiv.appendChild(lineBreak); // Añadir el salto de línea

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
warningDiv.appendChild(button);

// Añadir el div al cuerpo del documento
document.body.appendChild(warningDiv);

// Función para mostrar el div de advertencia
function showWarning() {
    warningDiv.style.display = 'block'; // Mostrar el div
}

// Ejemplo de uso: mostrar el div después de 3 segundos
setTimeout(showWarning, 3000);


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
