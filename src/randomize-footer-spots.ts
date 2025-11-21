const SIZE_RATIO = 96;
const SIZE_OFFSET = 48;
const TOP_RATIO = 72;
const TOP_OFFSET = 16;
const DURATION_RATIO = 4;
const DURATION_OFFSET = 4;
const POSITION_RATIO = 12;
const POSITION_OFFSET = -24;

export const randomizeFooterSpots = () => {
  const pages = document.querySelectorAll<HTMLDivElement>(".page");

  pages.forEach((page) => {
    const spots = page.querySelectorAll<HTMLSpanElement>(".spot");
    const sectionRatio = 100 / spots.length;

    spots.forEach((spot, index) => {
      const size = Math.floor(Math.random() * SIZE_RATIO) + SIZE_OFFSET;
      spot.style.width = `${size}px`;
      spot.style.height = `${size}px`;

      const left = Math.floor((index + Math.random() - 0.5) * sectionRatio);
      spot.style.left = `${left}%`;

      const top = Math.floor(Math.random() * TOP_RATIO) + TOP_OFFSET;
      spot.style.top = `${top}%`;

      const animationName = `float--${page.id}-${index}`;
      const duration = Math.floor(
        Math.random() * DURATION_RATIO + DURATION_OFFSET,
      );
      spot.style.animation = `${animationName} ${duration}s ease-in-out infinite`;

      const [x1, x2, y1, y2] = Array.from({ length: 4 }).map(
        () => Math.floor(Math.random() * POSITION_RATIO) + POSITION_OFFSET,
      );

      const keyframes = `
        @keyframes ${animationName} {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(${x1}px, ${y1}px); }
          66% { transform: translate(${x2}px, ${y2}px); }
        }
      `;

      const style = document.createElement("style");
      style.id = `style-${animationName}`;
      style.textContent = keyframes;

      document.head.appendChild(style);
    });
  });
};
