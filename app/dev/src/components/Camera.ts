import * as THREE from "three";

export class Camera extends THREE.PerspectiveCamera
{
    constructor(fov:number, aspect:number, near:number, far:number)
    {
        super(fov, aspect, near, far);
        this.position.set(0, 2, 10)
        this.rotateX(-0.2);
    }
}