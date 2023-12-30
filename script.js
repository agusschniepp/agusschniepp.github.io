
// Imports
import * as THREE from 'https://unpkg.com/three@0.119.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js'

// Reset ScrollPosition
window.addEventListener('beforeunload', () => {
    window.scrollTo(0,0)
})
// Nav-bar
document.addEventListener('scroll',()=>{
    if (scrollY > 5) {
        $('.nav-bar').addClass("sticky");
        $('.nav-bar-mobile').addClass("sticky");
        document.getElementById('btn-nav').style.display = 'flex'
    } else {
        $('.nav-bar').removeClass("sticky");
        $('.nav-bar-mobile').removeClass("sticky");
        document.getElementById('btn-nav').style.display = 'none'
        splash.style.display = 'none';
    }
})


let splash = document.getElementById('nav-splash')
splash.style.display = 'none'
function splashed () {
        document.getElementById('btn-nav').addEventListener('click',()=>{
        if (splash.style.display == 'none') {
            splash.style.display = 'flex';
        } else if (scrollY < 5){
            splash.style.display = 'none';
        } else {
            splash.style.display = 'none';
        }
    })
}
splashed ()

window.addEventListener('DOMContentLoaded', navRezise)
window.addEventListener('resize', navRezise)

function navRezise () {
    if (window.innerWidth < 900) {
        document.getElementById('nav').style.display = 'none'
        document.getElementById('nav-mob').style.display = 'flex'
    } else {
        document.getElementById('nav-mob').style.display = 'none'
        document.getElementById('nav').style.display = ' inline-block'
    }
}
// Typed Animation
var typed = new Typed(".introduction__me-animation", {
    strings : ["Developer"], 
    typeSpeed: 90,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".about__me-animation", {
    strings : ["Developer"], 
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});   

// Carousel
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.nav-bar-items', {
    delay: 0,
    duration: 2500,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.introduction__greetings', {
    delay: 0,
    duration: 2500,
    origin: 'bottom',
     distance: '-100px'
}); 
sr.reveal('.introduction__name', {
    delay: 0,
    duration: 2500,
    origin: 'bottom',
     distance: '-100px'
}); 
sr.reveal('.introduction__me', {
    duration: 2500,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.obj', {
    duration: 4000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.about__tittle', {
    duration: 2500,
    origin: 'right',
    distance: '-100px'
}); 
sr.reveal('.about__me-tittle', {
    duration: 2500,
    origin: 'right',
    distance: '-100px'
});
sr.reveal('.about__me-paragraph', {
    duration: 2500,
    origin: 'top',
    distance: '-100px'
});
sr.reveal('.about__img', {
    duration: 3000,
    origin: 'rigth',
    distance: '-100px'
});
sr.reveal('.btn-cv', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});
sr.reveal('.proyect__tittle', {
    duration: 2500,
    origin: 'rigth',
    distance: '-100px'
});
sr.reveal('.slider', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});

// Tree.js

    // ID Canvas
    const miDiv = document.getElementById('obj');

    // Render scena
    const camera = new THREE.PerspectiveCamera(75, miDiv.clientWidth / miDiv.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    const scene = new THREE.Scene();

    // Resize 
    const renderer = new THREE.WebGLRenderer({alpha : true});
    const canvas = renderer.domElement;
    renderer.setSize(miDiv.clientWidth, miDiv.clientHeight);
    window.addEventListener('mousemove', () => {
        const newWidth = miDiv.clientWidth;
        const newHeight = miDiv.clientHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        // Look Animation
        if (window.innerWidth > 800) {
        window.addEventListener('mousemove', onDocumentMouseMove, true);
            function onDocumentMouseMove(event) {
                const mouseX = (event.clientX / newWidth) * 1.1 - 1;
                const mouseY = -(event.clientY / newHeight) * 1.1 + 1;
                lookAtVector.set(mouseX, mouseY, 0.5);
            }
            //NOTE: FIX ERROR; PAUSE ANIMATION WHEN PAGE ARE NOT LOOKING
            // Refresh Look
            model.position.copy(fixedPosition);
            model.lookAt(lookAtVector);
        };
    });
    window.addEventListener('resize', ()=>{
        const newWidth = miDiv.clientWidth;
        const newHeight = miDiv.clientHeight;
        ancho()
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    })
    miDiv.appendChild(canvas);

    // Orbit Controls
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.rotateSpeed = 0.3;
    orbit.enableZoom = 0
    orbit.enablePan = 0;
    orbit.enableDamping = 0; 
    orbit.panSpeed = 0;
    orbit.zoomSpeed = 0;
    orbit.update()

    // Ilumination
   
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(1, 1, 1).normalize();
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight,directionalLight2);
    directionalLight.castShadow = true;

    // 3D Model
    const duck = new URL('./mapachesito.glb', import.meta.url)
    let model;

    // Vector 3D Object position
    const fixedPosition = new THREE.Vector3(0, 0, 0); 
    const lookAtVector = new THREE.Vector3(); 

    // Add 3D Model
    const assetLoader = new GLTFLoader();

    assetLoader.load(duck.href, (gltf)=>{
        model = gltf.scene;
        scene.add(model);
        ancho()
        model.position.set(0,0,0);
        
        // Add Animations
        const animate = () => {

            // Levitation
            requestAnimationFrame(animate);
            if (model) {
                model.position.y = Math.sin(Date.now() * 0.001) * .2;
                if (window.innerWidth < 800) {
                    model.rotation.y += 0.005;
                }
            } 
  
            // Render scene
            renderer.render(scene, camera);
        };

        animate();

    }, undefined, function(error) {
        console.error(error);
    });

    // Animate
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    // Object Responsive
    function ancho(){
        if (window.innerWidth < 600) {
            model.scale.y = 6;
            model.scale.x = 6;
            model.scale.z = 6;
        } else {
            model.scale.y = 7;
            model.scale.x = 7;
            model.scale.z = 7;
        }
    }
    
