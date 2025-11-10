import gsap, { Circ, Power1 } from "gsap";
import { colors, getRandomIndex } from "./colors";
import { body, menu } from "./dom-queries";

export const openMenu = async (
  animationLayer: HTMLDivElement,
  radius: number,
): Promise<void> => {
  body.appendChild(animationLayer);

  await Promise.all([
    gsap.fromTo(
      "#circle",
      { fill: colors[getRandomIndex()] },
      { fill: "#DCD7BA", duration: 1, ease: Power1.easeIn },
    ),
    gsap.to("#circle", { r: radius, duration: 0.8, ease: Circ.easeInOut }),
  ]);

  menu.classList.toggle("hidden");

  await gsap.fromTo(menu, { opacity: 0 }, { opacity: 1 });
};
