import { colors, getRandomIndex } from "./colors";
import { bullets } from "./dom-queries";

export const styleBullets = () => {
  setInterval(() => {
    bullets.forEach((element) => {
      element.style.backgroundColor = colors[getRandomIndex()];
    });
  }, 3000);
};
