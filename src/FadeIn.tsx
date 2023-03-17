import { animated, useSpring } from "@react-spring/web";

type Props = {
  active: boolean;
  children: any;
};

const FadeIn = ({ active, children }: Props) => {
  const styles = useSpring({
    opacity: active ? 1 : 0,
    display: active ? "block" : "none",
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeIn;
