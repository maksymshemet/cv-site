import * as Three from 'three'

function vertexShader() {
    return `
        attribute vec3 position;

        void main(){
          gl_Position = vec4(position, 1.0);
        }
    `
}

function fragmentShader() {
    return `
      precision highp float;
      uniform vec2 resolution;
      uniform float yScale1;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float deltaScale;
      uniform float distortion;

      void main() {

        vec2 res = vec2(resolution.x / 2.0, 175.0);
        vec2 p = (gl_FragCoord.xy - res) / resolution.x * 9.0;
        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.035 / abs(p.y + sin((rx + time) * xScale) * yScale1);
        float g = 0.035 / abs(p.y + sin((gx + time) * xScale) * yScale1);
        float b = 0.035 / abs(p.y + sin((bx + time) * xScale) * yScale1);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `
}

function canvasHeight() {
    if (window.innerHeight > window.screen.availHeight)
        return window.screen.availHeight
    else
        return window.innerHeight
}

function canvasWidth() {
    return Math.min(
        window.innerWidth,
        window.screen.availWidth,
        document.body.clientWidth)
}

export class Stage {
    get width() { return canvasWidth(); }
    get height() { return canvasHeight(); }

    constructor(canvas) {
        this.clearColor = 0x000000
        this.canvas = canvas
        this.cameraParam = {
            left: -1,
            right: 1,
            top: 1,
            bottom: 1,
            near: 0,
            far: -1
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;

        this.isInitialized = false;
    }

    init() {
        this.scene = new Three.Scene();
        this._setRender();
        this._setCamera();

        this.isInitialized = true;
    }

    _setRender() {
        this.renderer = new Three.WebGLRenderer({
            canvas: this.canvas
        });
        //https://stackoverflow.com/questions/60500710/how-to-enable-retina-resolution-render-setsize-on-iphone-with-threejs
        // this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(new Three.Color(this.clearColor));
        this.renderer.setSize(this.width, this.height, false);
        // this.renderer.setSize(window.screen.width, window.screen.height, false);
    }

    _setCamera() {
        if (!this.isInitialized) {
            this.camera = new Three.OrthographicCamera(
                this.cameraParam.left,
                this.cameraParam.right,
                this.cameraParam.top,
                this.cameraParam.bottom,
                this.cameraParam.near,
                this.cameraParam.far
            );
        }

        this.camera.aspect = this.width / this.height;

        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height, false);
    }

    _render() {
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        // console.log("resize")
        this._setRender();
        this._setCamera();
    }

    onRaf() {
        this._render();
    }
}

export class Mesh {
    get width() { return canvasWidth(); }
    get height() { return canvasHeight(); }

    constructor(stage) {
        this.canvas = stage.canvas
        this._createUniforms();

        this.stage = stage;

        this.mesh = null;

        this.xScale = 0.1;//1.0
        this.yScale = 0.5;
        this.distortion = 0.050;
    }

    init() {
        this._setMesh();
    }

    _getScaleY() {
        let sc = 1.0 - (0.5 * this.width) / 1800.0;
        if (sc < 0.3) sc = 0.3;
        if (sc > 0.6) sc = 0.6;

        console.log(`${this.width}x${this.height} ${sc}`);
        return sc
    }
    _setMesh() {
        const position = [
            -1.0, -1.0, 0.0,
            1.0, -1.0, 0.0,
            -1.0,  1.0, 0.0,
            1.0, -1.0, 0.0,
            -1.0,  1.0, 0.0,
            1.0,  1.0, 0.0
        ];

        const positions = new Three.BufferAttribute(new Float32Array(position), 3);

        const geometry = new Three.BufferGeometry();
        geometry.setAttribute("position", positions);

        const material = new Three.RawShaderMaterial({
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader(),
            uniforms: this.uniforms,
            side: Three.DoubleSide
        });

        this.mesh = new Three.Mesh(geometry, material);

        this.stage.scene.add(this.mesh);
    }

    _createUniforms() {
        this.uniforms = {
            // resolution: { type: "v2", value: [ this.canvasWidth, this.canvasHeight ] },
            resolution: { type: "v2", value: [ this.width, this.height ] },
            time: { type: "f", value: 0.0 },
            xScale: { type: "f", value: 0.6 }, // 0.1
            yScale: { type: "f", value: 0.05 }, //0.7
            deltaScale: { type: "f", value: 500.0 },
            distortion: { type: "f", value: 0.011 },//0.5
            yScale1: { type: "f", value:  this._getScaleY() }
        };
    }

    _render() {
        this.uniforms.time.value += 0.01;
    }

    onRaf() {
        this._render();
    }

    onResize() {
        this._createUniforms()
    }
}
