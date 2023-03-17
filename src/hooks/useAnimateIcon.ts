import { useState, useEffect, useCallback } from "react";
import { useSpring } from "react-spring";

type Props = {
  rotate: number;
  scale: number;
};

const useAnimateIcon = ({ rotate, scale }: Props) => {
  const [start, setStarted] = useState(false);
  const style = useSpring({
    transform: start
      ? `rotate(${rotate}deg) scale(${scale})`
      : `rotate(0deg) scale(1)`,
    config: {
      tension: 180,
      friction: 5,
    },
  });
  useEffect(() => {
    if (!start) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setStarted(false);
    }, 150);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [start]);
  const animate = useCallback(() => {
    setStarted(true);
  }, []);
  return [style, animate];
};
export default useAnimateIcon;
