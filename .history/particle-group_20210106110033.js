import { Particle } from "./particle.js";
import { distance, pointCircle } from "./utils.js";

const DEFAILT_ANGLE = (90 * Math.PI) / 180;
const GRAVITY = 0.3;
const VERTICAL_RATE = 0.3;
const MOUSE_PULL_RATE = 0.1;
const FRICTION = 0.97;
const MOUSE_MOVE_FRICTION = 0.7;

export class ParticleGroup {
  constructor(pos, groupRatio, texture, lineTotal) {
    this.particles = [];

    for (let i = 0; i < lineTotal; i++) {
      const item = new Particle(pos, groupRatio, i / lineTotal, texture);
      this.particles.push(item);
    }
  }

  animate(mouse) {
    const total = this.particles.length;

    for (let i = 0; i < total; i++) {
      const item = this.particles[i];
      item.vy += GRAVITY;

      if (pointCircle(item.x, item.y, mouse.x, mouse.y, 80)) {
        const pos = this.getPullPos();
      }
    }
  }

  getPullPos(x1, y1, x2, y2) {
    const dist = distance(x1, y1, x2, y2);
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const x = Math.cos(angle) * dist * MOUSE_PULL_RATE;
    const y = Math.sin(angle) * dist * MOUSE_PULL_RATE;
    return {
      x,
      y,
    };
  }

  setAngle() {}
}
