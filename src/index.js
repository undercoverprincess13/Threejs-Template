import {World} from "./World/World";


function main() {
    const container = document.getElementById("scene-container");
    console.log(container);
    const world = new World(container);
    world.start();
}

main();