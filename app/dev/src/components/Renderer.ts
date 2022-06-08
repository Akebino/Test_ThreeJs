import * as THREE from "three";

export class Renderer extends THREE.WebGLRenderer
{
    constructor() 
    {
        super();
        this.setSize(window.innerWidth, window.innerHeight);
        this.setPixelRatio(window.devicePixelRatio);
    }
}