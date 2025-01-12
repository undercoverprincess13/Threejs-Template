import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";

export function createExampleCube() {
    const cubeGeo = new BoxGeometry(2, 2, 2);
    const cubeMat = new MeshBasicMaterial();
    const mesh = new Mesh(cubeGeo, cubeMat);

    mesh.tick = (delta) => {
        mesh.rotation.z += delta * Math.PI / 2;
    }

    return mesh;
}