import { useEffect, useRef } from "react";

export const useGrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;
    let noiseData: ImageData[] = [];
    let frame = 0;
    let loopTimeout: number;

    const createNoise = () => {
      const iData = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(iData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.1) {
          buffer32[i] = 0xff000000;
        }
      }

      noiseData.push(iData);
    };

    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    const loop = () => {
      paintNoise();
      loopTimeout = window.setTimeout(() => {
        requestAnimationFrame(loop);
      }, 1000 / 25);
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;

      noiseData = [];
      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    let resizeThrottle: number;
    const reset = () => {
      window.addEventListener(
        "resize",
        () => {
          window.clearTimeout(resizeThrottle);
          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        false
      );
    };

    setup();
    reset();

    return () => {
      window.removeEventListener("resize", reset);
      console.log("event removed");
    };
  }, []);

  return canvasRef;
};
