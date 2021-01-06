import { Text } from "./text.js";

import { ParticleGroup } from "./particle-group.js";

const LINE_TOTAL = 10;
export class Visual {
  constructor() {
    this.text = new Text();

    this.texture = PIXI.Texture.from("particle.png");

    this.ParticleGroups = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 10,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}
