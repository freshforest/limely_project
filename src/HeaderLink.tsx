import { useState } from "react";
import { Link } from "@mui/material";
import styled from "@emotion/styled";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  icon: any;
  hoveredIndex: number | undefined;
};
const HeaderLink = ({ icon, hoveredIndex }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = useSpring({
    opacity: !isHovered && hoveredIndex !== undefined ? 0.2 : 1,
    immediate: isHovered,
    config: { duration: 200 },
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <animated.div style={styles}>
      <IconStyled
        href="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </IconStyled>
    </animated.div>
  );
};

export default HeaderLink;

const IconStyled = styled(Link)`
  @media (max-width: 750px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
