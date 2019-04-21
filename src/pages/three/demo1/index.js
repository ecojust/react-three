
import {MiddleComponent,React} from '../../../utils/MiddleComponent'

import * as THREE from "three"
export class demo1 extends MiddleComponent {
	constructor(props){
		super(props);
    this.camera=null;
    this.scene=null;
    this.renderer=null;
    this.controls = null;
    this.mesh=null;
    this.raycaster = null;
    this.mouse = null;
    this.height = null;
    this.width = null;
    console.log(this.$store);
	}
	

  render() {
    return (
      <div id="webgl" style={{width:'100%',height:'100%'}}></div>
    );
  }

  componentDidMount() {
    this.init();
    //this.add();
    this.loadModel();
    //this.loadDae();
    this.animate();
    //this.getmenu();
  }

  init = ()=>{
    var dom = document.getElementById('webgl');
    this.width = dom.clientWidth;
    this.height = dom.clientHeight;
    const draw = dom;
    this.camera = new THREE.PerspectiveCamera(70,this.width/this.height,0.1,1000);
    this.camera.position.set(0, 4, 5);
    this.scene = new THREE.Scene();
    this.camera.lookAt(new THREE.Vector3(0,0,0));
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.shadowMap.enabled = true;

    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap

    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(this.width,this.height);
    draw.appendChild(this.renderer.domElement);

    //鼠标控制视角以及缩放
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
     this.controls.dampingFactor = 0.05;
     this.controls.enableZoom = true;
     this.controls.autoRotate = true;
     this.controls.minDistance = 1;
     this.controls.maxDistance = 200;
     this.controls.enablePan = true;
     this.controls.autoRotateSpeed = 5;

     //光线
     //this.scene.add(new THREE.AmbientLight(0x444444));
      const light = new THREE.PointLight(0xffffff);
        light.position.set(0,10,0);
        //告诉平行光需要开启阴影投射
        light.castShadow = true;
       this.scene.add(light);

       //射线
       this.raycaster = new THREE.Raycaster();
       //鼠标线
       this.mouse = new THREE.Vector2();

       window.addEventListener( 'click', this.onMouseClick, false );
  }
  onMouseClick = ( event )=> {
      //console.log(controls.scale);
        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
        // mouse.x = (( event.clientX / window.innerWidth )*2.5  - 1)*controls.scale;
        // mouse.y = -(( event.clientY / window.innerHeight )*2.5  + 1)*controls.scale;
        this.mouse.x = ( event.clientX / this.width )*2  - 5;
        this.mouse.y = -( (event.clientY-60) / this.height )*2  + 5;
        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera( this.mouse, this.camera );
        //console.log(raycaster);


        // 获取raycaster和模型相交的数组集合
        var intersects = this.raycaster.intersectObjects( this.scene.children );
        //console.log(intersects);
        for ( var i = 0; i < intersects.length; i++ ) {
          var color = this.randomColor();
            intersects[ i ].object.material.color.set( color );
        }



        //找出外部模型
        var scensObjs = [];
        this.scene.children.forEach(child => {
          for (var j = 0; j < child.children.length; j++) {
            var obj=child.children[j];
            scensObjs.push(obj);
          }
        });
        //点击的时候求出选中的外部模型
         var clicked = this.raycaster.intersectObjects(scensObjs );
        for ( var k = 0; k < clicked.length; k++ ) {
          var color2 = this.randomColor();
            clicked[ k ].object.material.color.set( color2 );
        }

    }
    randomColor = ()=> {
        var arrHex = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d","e","f"],
            strHex = "#",
            index;
        for(var i = 0; i < 6; i++) {
            index = Math.round(Math.random() * 15);
            strHex += arrHex[index];
        }
        return strHex;
    }
  add = ()=>{
    let geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
    let material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(geometry,material);
    this.scene.add(this.mesh);
    //this.renderer.render(this.scene,this.camera);
  }
  loadModel = ()=>{
        //辅助工具
        var helper = new THREE.AxesHelper(50);
        this.scene.add(helper);
        //加载JSON模型
        var loader = new THREE.ObjectLoader();
        var vm = this;
        loader.load("/chair.json",function (obj) {
            vm.scene.add(obj);
        });
  }
  loadDae = ()=>{
    var helper = new THREE.AxesHelper(50);
        this.scene.add(helper);
        var loader = new THREE.ColladaLoader();
        var mesh;
        var vm = this;
        loader.load("/car2.dae", function (result) {

            mesh = result.scene.children[0].clone();

            vm.scene.add(mesh);

        });
  }
  animate = ()=>{
    //this.mesh.rotation.x += 0.03;
    //this.camera.rotation.y += 0.03;
    this.controls.update();
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.animate);
  }

  
}

  