import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Vector3 } from "three";

// ロード後処理
window.addEventListener("DOMContentLoaded", init)

const VIEWPORT_W = window.innerWidth;
const VIEWPORT_H = window.innerHeight;
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
	45,
	VIEWPORT_W / VIEWPORT_H,
	1,
	10000
);
const scene = new THREE.Scene();
const targetName: string = "モンキー";
//const controls = new OrbitControls(camera, renderer.domElement);


function init()
{
	//// レンダラーを作成
	//const renderer = new THREE.WebGLRenderer();
	// レンダラーのサイズを設定
	renderer.setSize(VIEWPORT_W, VIEWPORT_H);
	renderer.setPixelRatio(window.devicePixelRatio);
	// canvasをbodyに追加
	document.body.appendChild(renderer.domElement);

	scene.background = new THREE.Color( 0xa4f5d9 );

	camera.position.set(0, 2, 10)
	camera.rotateX(-0.2);

	//// 滑らかにカメラコントローラーを制御する
	//controls.enableDamping = true;
	//controls.dampingFactor = 0.2;

	InitHelper();

	// 平行光源を生成
	const light = new THREE.DirectionalLight(0xffffff);
	light.position.set(1, 1, 1);
	scene.add(light);

	// オブジェクト操作イベント登録
	AddEventObjectControl();

	// モデルをロード
	const loader = new GLTFLoader();
	loader.load("./resource/test.gltf", function(data){
		const gltf = data;
		const obj = gltf.scene;
		obj.name = targetName;
		console.log("add object %s.", obj.name);
		scene.add(obj);
	});



	// マイフレーム更新処理
	const tick = () => {
		requestAnimationFrame(tick);

		// カメラコントローラーを更新
		//controls.update();

		// 描画
		renderer.render(scene, camera);
	};
	tick();

	//console.log("Hello World.");
};

function InitHelper()
{
	// グリッド表示
	const gridHelper = new THREE.GridHelper(80, 50,0xffff00) 
	scene.add(gridHelper);
	// 軸表示
	const axesHelper = new THREE.AxesHelper( 5 );
	scene.add( axesHelper );
}

function AddEventObjectControl()
{
	renderer.domElement.addEventListener( 'touchstart', OnTouchDown, false );
	renderer.domElement.addEventListener( 'touchmove', OnTouchMove, false );
	renderer.domElement.addEventListener( 'touchend', OnTouchUp, false );

	renderer.domElement.addEventListener( 'mousedown', OnMouseDown, false );
	renderer.domElement.addEventListener( 'mousemove', OnMouseMove, false );
	renderer.domElement.addEventListener( 'mouseup', OnMouseUp, false );
}



const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const moveValue = new THREE.Vector3();
const planeIntersection = new THREE.Vector3();
const plane = new THREE.Plane(new Vector3(0, 0, 1));
let dragObj: THREE.Object3D | null;
function OnMouseDown(ev: MouseEvent)
{
	ev.preventDefault();

	mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(ev.clientY / window.innerHeight) * 2 + 1;
	//console.log("mouse(%f, %f)", mouse.x, mouse.y);
	raycaster.setFromCamera( mouse, camera );

	const intersects = raycaster.intersectObjects( scene.children );
	
	//console.log("intersects.length = %d", intersects.length);
	if(intersects.length > 0)
	{
		for(let i = 0; i < intersects.length; i++)
		{
			//console.log("intersect name = %s", intersects[i].object.name);
			if(intersects[i].object.name === targetName)
			{
				dragObj = intersects[i].object;
				break;
			}
		}
		if(dragObj && raycaster.ray.intersectPlane(plane, planeIntersection))
		{
			moveValue.copy(planeIntersection).sub(dragObj.position);
		}
		// planeの動的normal制御(不具合のため一時コメントアウト)
		// おそらくカメラの拡大率を反映する必要がある
		//let target = new Vector3();
		//camera.getWorldDirection(target);
		//plane.set(target, 0);
		//plane.normalize();
	}
}

function OnMouseMove(ev: MouseEvent)
{
	ev.preventDefault();
	mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(ev.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );
	
	if ( dragObj != null) {
		//controls.enabled = false;
		if(raycaster.ray.intersectPlane(plane, planeIntersection))
		{
			dragObj.position.copy(planeIntersection.sub(moveValue));
		}
	}
}

function OnMouseUp(ev: MouseEvent)
{
	ev.preventDefault();
	if(dragObj != null)
	{
		dragObj = null;
	}
}



const touch = new THREE.Vector2();
function OnTouchDown(ev: TouchEvent)
{
	ev.preventDefault();

	const touchObj = ev.changedTouches[0];
	touch.x = (touchObj.pageX / window.innerWidth) * 2 - 1;
	touch.y = -(touchObj.pageY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera( touch, camera );

	const intersects = raycaster.intersectObjects( scene.children );
	
	//console.log("intersects.length = %d", intersects.length);
	if(intersects.length > 0)
	{
		for(let i = 0; i < intersects.length; i++)
		{
			//console.log("intersect name = %s", intersects[i].object.name);
			if(intersects[i].object.name === targetName)
			{
				dragObj = intersects[i].object;
				break;
			}
		}
		if(dragObj && raycaster.ray.intersectPlane(plane, planeIntersection))
		{
			moveValue.copy(planeIntersection).sub(dragObj.position);
		}
	}
}

function OnTouchMove(ev: TouchEvent)
{
	ev.preventDefault();

	const touchObj = ev.changedTouches[0];
	touch.x = (touchObj.pageX / window.innerWidth) * 2 - 1;
	touch.y = -(touchObj.pageY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera( touch, camera );
	
	if ( dragObj != null) 
	{
		if(raycaster.ray.intersectPlane(plane, planeIntersection))
		{
			dragObj.position.copy(planeIntersection.sub(moveValue));
		}
	}
}

function OnTouchUp(ev: TouchEvent)
{
	ev.preventDefault();
	if(dragObj != null)
	{
		dragObj = null;
	}
}