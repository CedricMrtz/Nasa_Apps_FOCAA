import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 *Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);
const detail = 12;
const loader= new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1,detail);
const material = new THREE.MeshStandardMaterial({
    map: loader.load("https://i.ibb.co/rymLrxV/earthmap1k.jpg"),
});
const earthMesh = new THREE.Mesh(geometry,material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
    //transparent: true,
    //opacity: 0.6,
    map: loader.load("./textures/03_earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const stars = getStarfield({numStars: 2000});
scene.add(stars);

// const hemiLight = new THREE.HemisphereLight();
// scene.add(hemiLight);
const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 1.5)
scene.add(sunLight);

function animate(){
    requestAnimationFrame(animate);

    earthMesh.rotation.y += 0.002; 
    lightsMesh.rotation.y += 0.002;
    renderer.render(scene,camera);
}
//14.50 empieza las
//<a href="https://ibb.co/Z15R3T8"><img src="https://i.ibb.co/0VTpkJM/earthbump1k.jpg" alt="earthbump1k" border="0"></a>
//<a href="https://ibb.co/7C6qfSR"><img src="https://i.ibb.co/V9Ps1LQ/earthcloudmap.jpg" alt="earthcloudmap" border="0"></a>
//<a href="https://ibb.co/k0XxgdG"><img src="https://i.ibb.co/HYqVDJK/earthcloudmaptrans.jpg" alt="earthcloudmaptrans" border="0"></a>
//<a href="https://ibb.co/m4r2YTC"><img src="https://i.ibb.co/L1DcqRz/earthlights1k.jpg" alt="earthlights1k" border="0"></a>
//<a href="https://ibb.co/zfrLvXz"><img src="https://i.ibb.co/rymLrxV/earthmap1k.jpg" alt="earthmap1k" border="0"></a>
//<a href="https://ibb.co/SVC9JKS"><img src="https://i.ibb.co/r5r1vZ9/earthspec1k.jpg" alt="earthspec1k" border="0"></a>
animate();