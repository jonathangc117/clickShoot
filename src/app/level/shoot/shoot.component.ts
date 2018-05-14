
import { Component, ViewChild, ElementRef } from '@angular/core';

import { LEVELS } from '../levelsMock'
import {STAGES} from '../stagesMock'
import * as THREE from 'three';
window['THREE'] = THREE;
import 'three/examples/js/controls/OrbitControls';

@Component({
  selector: 'app-shoot',
  templateUrl: './shoot.component.html',
  styleUrls: ['./shoot.component.css']
})
export class ShootComponent {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 210000);
  mesh = null;
  materials = [];
  material;// = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false});
  cube = null;
  geometry = new THREE.BoxGeometry(200000, 200000, 200000);
  

  imagebk = new Image();
  imageft = new Image();
  imagels = new Image();
  imagers = new Image();
  imageup = new Image();
  imagedn = new Image();
  
  

  



  controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);




  constructor() {
    
this.scene = new THREE.Scene();


    
    this.camera.position.z = 1000;

    this.createSkyboxMaterial();

    this.material = new THREE.MeshFaceMaterial(this.materials);

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);

  }



  createSkyboxMaterial() {

    this.imagebk= new Image();
    this.imagebk.src=STAGES[0].imageBk;
    let texturebk = new THREE.Texture();
    texturebk.image = this.imagebk;


    this.imagebk.onload = function () {
      texturebk.needsUpdate = true;
    };


    this.imageft= new Image();
    this.imageft.src=STAGES[0].imageFt;
    let textureft = new THREE.Texture();
    textureft.image = this.imageft;


    this.imageft.onload = function () {
      textureft.needsUpdate = true;
    };


    this.imageup= new Image();
    this.imageup.src=STAGES[0].imageUp;
    let textureup = new THREE.Texture();
    textureup.image = this.imageup;


    this.imageup.onload = function () {
      textureup.needsUpdate = true;
    };

    this.imagedn= new Image();
    this.imagedn.src=STAGES[0].imageDn;
    let texturedn = new THREE.Texture();
    texturedn.image = this.imagedn;


    this.imagedn.onload = function () {
      texturedn.needsUpdate = true;
    };

    this.imagers= new Image();
    this.imagers.src=STAGES[0].imageRs;
    let texturers = new THREE.Texture();
    texturers.image = this.imagers;


    this.imagers.onload = function () {
      texturers.needsUpdate = true;

    };


    this.imagels= new Image();
    this.imagels.src=STAGES[0].imageLs;
    let texturels = new THREE.Texture();
    texturels.image = this.imagels;


    this.imagels.onload = function () {
      texturels.needsUpdate = true;
    };






    this.materials = [

      new THREE.MeshBasicMaterial({ map: textureft , side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({ map: texturebk , side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({ map: textureup , side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({ map: texturedn , side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({ map: texturers , side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({ map: texturels , side: THREE.DoubleSide})

      // new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../rubics2.jpg'), side: THREE.DoubleSide}),
    
    ]
  }

  ngAfterViewInit() {
    this.renderer.setSize(600, 400);
    this.renderer.domElement.style.display = "block";
    this.renderer.domElement.style.margin = "auto";
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    window.addEventListener('resize', function () {
      let width = window.innerWidth;
      let height = window.innerHeight;


    })
    this.animate();
  }
  update() {

  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.02;
    
    this.renderer.render(this.scene, this.camera);
  }



}