import gsap, { Circ } from "gsap";
import { menu } from "./dom-queries";

export const closeMenu = async (
  animationLayer: HTMLDivElement
): Promise<void> => {
  await Promise.all([
    gsap.fromTo(menu, { opacity: 1 }, { opacity: 0 }),
    gsap.to("#circle", {
      r: 36,
      fill: "#DCD7BA",
      duration: 0.8,
      ease: Circ.easeInOut,
    }),
  ]);

  menu.classList.toggle("hidden");

  animationLayer.remove();
};
