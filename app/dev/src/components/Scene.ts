import * as THREE from "three";
import { HelperView } from "../debug/HelperView"

export class Scene extends THREE.Scene
{
    constructor()
    {
        super();
        this.background = new THREE.Color( 0xa4f5d9 );
    }

    protected m_helperView: HelperView = new HelperView(this);
}