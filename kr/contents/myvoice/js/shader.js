/**
 * -----------------------------------------------------
 * Created by uforgot on 2019-02-14
 * designsamsung_2019
 * -----------------------------------------------------
 */

var Shader = (function() {

    var width = window.innerWidth;
    var height = document.getElementById('img-box').offsetHeight;

    var container;
    var camera, scene, renderer;
    var uniforms;

    var _init = function (){
        container = document.getElementById('shader-box');

        camera = new THREE.Camera();
        camera.position.z = 1;

        scene = new THREE.Scene();

        var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

        uniforms = {
            // u_time: { type: "f", value: 1.0 },
            u_time: { type: "f", value: 1000.0 },
            u_resolution: { type: "v2", value: new THREE.Vector2() }
        };

        var material = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent
        } );

        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        // renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(width, height);
        uniforms.u_resolution.value.x = width;
        uniforms.u_resolution.value.y = height;

        container.appendChild( renderer.domElement );

        // onWindowResize();
        window.addEventListener( 'resize', onWindowResize, false );
        animate();
    };

    function onWindowResize( event ) {
        // console.log('shader resize');
        camera.aspect = window.innerWidth / document.getElementById('img-box').offsetHeight;
        renderer.setSize( window.innerWidth, document.getElementById('img-box').offsetHeight );
        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = document.getElementById('img-box').offsetHeight;
    }

    function animate() {
        render();
        requestAnimationFrame( animate );
    }

    function render() {
        uniforms.u_time.value += 0.012;
        renderer.render( scene, camera );
    }

    return{
        init:_init
    }

})();

