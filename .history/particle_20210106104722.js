export class Particle {
  constructor(pos, groupRatio, indexRatio, texture) {
    this.sprite = new PIXI.Sprite(texture);
    const minScale = 0.3;
    const maxScale = 0.6;
    const scale = (maxScale - minScale) * indexRatio + minScale;
    this.sprite.scale.set(scale);

    const minLight = 60;
    const maxLight = 40;
    const light = (maxLight - minLight) * indexRatio + minLight;

    const minHue = 280;
    const maxHue = 330;
    const hue = (maxHue - minHue) * groupRatio + minHue;

    this.sprite.tint = 0xff0000;
  }
}
