import { closeMenu } from "./close-menu";
import { body, openMenuButton, closeMenuButton } from "./dom-queries";
import { getAnimationLayer } from "./get-animation-layer";
import { openMenu } from "./open-menu";

export const attachMenuControlEvents = (): (() => void) => {
  const { width, height } = body.getBoundingClientRect();
  const animationLayer = getAnimationLayer(width, height);
  const radius = Math.sqrt(
    Math.pow(width - 108, 2) + Math.pow(height - 108, 2)
  );

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
