import { Text } from "./text.js";
class App {
  constructor() {
    this.setWebgl();

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.text = new Text();
        this.text.setText(
          "A",
          2,
          document.body.clientWidth,
          document.body.clientHeight
        );
      },
    });
  }
  setWebgl() {
    this.renderer = new devicePixelRatio.Renderer({});
  }
}

window.onload = () => {
  new App();
};
