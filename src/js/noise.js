export default function noise() {
  let canvas;
  let ctx;
  let wWidth;
  let wHeight;
  let frame = 0;
  const noiseData = [];

  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i += 1) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }
    noiseData.push(idata);
  };

  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame += 1;
    }
    ctx.putImageData(noiseData[frame], 0, 0);
  };

  const loop = () => {
    paintNoise(frame);
    window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };

  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    for (let i = 0; i < 10; i += 1) {
      createNoise();
    }
    loop();
  };

  const init = () => {
    canvas = document.getElementById('noise');
    ctx = canvas.getContext('2d');
    setup();
  };

  init();
}
