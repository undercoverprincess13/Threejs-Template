import {WebGLRenderer} from "three";


function createRenderer(camera) {
    const renderer = new WebGLRenderer({ antialias: true });
    return renderer;
}

export { createRenderer };