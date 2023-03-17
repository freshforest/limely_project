import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  img: string;
  label: string;
  href: string;
};

const PanelMini = ({ img, label, href }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = useSpring({
    scale: isHovered ? 1.1 : 1,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <PanelMiniStyled
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ overflow: "hidden" }}>
        <animated.div style={styles}>
          <ImgStyled src={img} alt={label} loading="lazy" />
        </animated.div>
      </div>
      <Typography
        variant="nav"
        sx={{ display: "block", fontWeight: "bold", mt: 1 }}
      >
        {label}
      </Typography>
    </PanelMiniStyled>
  );
};

export default PanelMini;

const PanelMiniStyled = styled(Link)`
  text-decoration: none;
`;

const ImgStyled = styled.img`
  aspect-ratio: 1/1;
  width: 100%;
  height: auto;
  display: block;
`;
