import * as THREE from '/js/three.js-master/build/three.module.js';
import {OrbitControls} from '/js/three.js-master/examples/jsm/controls/OrbitControls.js';
import {Color} from 'three';
import {GLTFLoader} from '/js/three.js-master/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded',()=> {
    let faceModel = document.querySelector('.faceModel');
    var faceModel_height = document.querySelector(".faceModel").offsetHeight;
    var faceModel_width = document.querySelector(".faceModel").offsetWidth;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 50, faceModel_width / faceModel_height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    const controls = new OrbitControls( camera, renderer.domElement );
    camera.position.set( 0, 1, 7);
    
    renderer.setSize( faceModel_width, faceModel_height);
    faceModel.insertAdjacentElement( "afterBegin" , renderer.domElement );


    scene.background = new Color('rgb(18,19,32)');

    //AmbientLight
    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.1);
    scene.add(ambient);

    //pointLight
    let pointLight = new THREE.PointLight(0xFFFFFF,0.5);
    pointLight.position.set(10, 100, 100);
    scene.add(pointLight);

    //pointLightHelper
    let sphereSize = 10;
    let pointLightHelper  = new THREE.PointLightHelper (pointLight, sphereSize);
    scene.add(pointLightHelper);
  
    //model
    const gltfLoader = new GLTFLoader();
    const url = '/js/diagnostic/faceModel/scene.gltf';
    gltfLoader.load(url, function(gltf) {
    var object = gltf.scene;
    object.position.set(0,-2.2, 0);
        object.traverse((node) => {
          if (!node.isMesh) return;
          node.material.wireframe = true;
      })
      scene.add(object);
    });
    

    function animate() {
        requestAnimationFrame( animate );

        controls.update();

        renderer.render( scene, camera );
    };

    animate();
})



