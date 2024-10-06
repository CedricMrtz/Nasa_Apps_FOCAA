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

const stars = getStarfield({ numStars: 2000 });
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// Texto de advertencia
const warningDiv = document.createElement('div');
warningDiv.style.position = 'absolute';
warningDiv.style.top = '50%';
warningDiv.style.left = '50%';
warningDiv.style.transform = 'translate(-50%, -50%)';
warningDiv.style.color = 'white';
warningDiv.style.fontSize = '2em';
warningDiv.style.display = 'none'; // Oculto por defecto
warningDiv.textContent = 'theres nothing to search for here';
document.body.appendChild(warningDiv);

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

    // Rotar la luna alrededor de la Tierra
    moonMesh.position.x = 1.5 * Math.cos(Date.now() * 0.001);
    moonMesh.position.z = 1.5 * Math.sin(Date.now() * 0.001);

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
