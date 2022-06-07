import * as THREE from "three";
import { Scene } from "../components/Scene"

export class HelperView
{
    constructor(scene: Scene)
    {
        // グリッド表示
        const gridHelper = new THREE.GridHelper(80, 50,0xffff00) 
        scene.add(gridHelper);
        // 軸表示
        const axesHelper = new THREE.AxesHelper( 5 );
        scene.add( axesHelper );
    }
}