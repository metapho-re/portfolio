import { closeMenu } from "./close-menu";
import { openMenuButton, closeMenuButton } from "./dom-queries";
import { getAnimationLayer } from "./get-animation-layer";
import { openMenu } from "./open-menu";

export const attachMenuControlEvents = (): (() => void) => {
  let width: number;
  let height: number;
  let radius: number;
  let animationLayer: HTMLDivElement;

  const setValues = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    radius = Math.sqrt(Math.pow(width - 108, 2) + Math.pow(height - 108, 2));
    animationLayer = getAnimationLayer(width, height);
  };

  setValues();

  window.addEventListener("resize", setValues);

  openMenuButton.addEventListener("click", () => {
    openMenu(animationLayer, radius);
  });

  closeMenuButton.addEventListener("click", () => {
    closeMenu(animationLayer);
  });

  return () => {
    closeMenu(animationLayer);
  };
};
