import * as THREE from '/js/three.js-master/build/three.module.js';
import {OrbitControls} from '/js/three.js-master/examples/jsm/controls/OrbitControls.js';
import {Color} from 'three';
import {GLTFLoader} from '/js/three.js-master/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded',()=> {
    let faceModel = document.querySelector('.content_block');
    var faceModel_height = document.querySelector(".content_block").offsetHeight;
    var faceModel_width = document.querySelector(".content_block").offsetWidth;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 50, faceModel_width / faceModel_height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    camera.position.set( 0, 1, 7);
    
    renderer.setSize( faceModel_width, faceModel_height);
    faceModel.insertAdjacentElement( "afterEnd" , renderer.domElement );

    // const geometry = new THREE.BoxBufferGeometry(50, 50, 50);
    // const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );

    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    scene.background = new Color('rgb(30,30,50)');


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
    var object;
    const gltfLoader = new GLTFLoader();
    const url = '/js/diagnostic/faceModel/scene.gltf';
    gltfLoader.load(url, function(gltf){
    object = gltf.scene;
    object.position.set(-3, -2, 4);
        object.traverse((node) => {
          if (!node.isMesh) return;
          node.material.wireframe = true;
      })
      scene.add(object);
    });
    
    function animate() {
        requestAnimationFrame( animate );

        object.rotateY(0.001);
        

        renderer.render( scene, camera );
    };

    animate();
})



