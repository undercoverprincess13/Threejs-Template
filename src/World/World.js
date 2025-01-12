import {createCamera} from "./systems/camera";
import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";
import {Loop} from "./systems/Loop";
import {createScene} from "./components/scene";
import {createExampleCube} from "./components/exampleCube";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

class World {
    #camera;
    #scene;
    #renderer;
    #loop;
    #resizer
    constructor (container) {
        this.#camera = createCamera();
        this.#renderer = createRenderer();
        this.#scene = createScene();
        this.#resizer = new Resizer(container, this.#camera, this.#renderer);
        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

        const controls = new OrbitControls(this.#camera, this.#renderer.domElement);
        controls.tick = () => controls.update();

        container.append(this.#renderer.domElement);

        const cube = createExampleCube();
        this.#scene.add(cube);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }

    start() {
        this.#loop.start();
    }

    stop() {
        this.#loop.stop();
    }
}

export { World };