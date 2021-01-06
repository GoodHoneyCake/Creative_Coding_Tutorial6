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

  show(stageWidth, stageHeight, stage) {
    if (this.container) {
      stage.removeChild(this.container);
    }
    this.pos = this.text.setText("R", 10, stageWidth, stageHeight);

    this.container = new PIXI.ParticleContainer(this.pos.length * LINE_TOTAL, {
      vertices: false,
      position: true,
      rotation: false,
      scale: false,
      uvs: false,
      tint: true,
    });
    stage.addChild(this.container);

    this.particles = [];
    for (let i = 0; i < this.pos.length; i++) {
      const item = new Particle(this.pos[i], this.texture);
      this.container.addChild(item.sprite);
      this.particles.push(item);
    }
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}
