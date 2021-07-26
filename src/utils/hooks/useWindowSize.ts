import { useState, useEffect } from "react";

interface Size {
  width: number;
  height: number;
}

type DetectedDevice = "mobile" | "tablet" | "laptop" | "fullHd";

function useSizeWindow(): DetectedDevice {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize && detectDevice(windowSize.width);
}

function detectDevice(windowWidth: number): DetectedDevice {
  if (windowWidth <= 500) {
    return "mobile";
  } else if (windowWidth <= 768) {
    return "tablet";
  } else if (windowWidth <= 1440) {
    return "laptop";
  } else {
    return "fullHd";
  }
}

export default useSizeWindow;
