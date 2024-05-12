export const getAnimationLayer = (
  width: number,
  height: number
): HTMLDivElement => {
  const element = document.createElement("div");

  element.id = "animation-layer";
  element.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}">
      <circle id="circle" cx="${width - 108}" cy="108" r="36" />
    </svg>
  `;

  return element;
};
