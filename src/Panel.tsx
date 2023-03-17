import styled from "@emotion/styled";
import { Link, Stack, Typography } from "@mui/material";
import BackgroundImage from "./BackgroundImage";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

type Props = {
  img: string;
  label1: string;
  label2: string;
  href: string;
  singleline?: boolean;
};

const Panel = ({ img, label1, label2, href, singleline }: Props) => {
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
    <PanelStyled
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          ...styles,
        }}
      >
        <BackgroundImage img={img} alt={label1} tint gradient />
      </animated.div>
      <FooterStyled>
        <LimitedText variant="h2" singleline={singleline}>
          {label1}
        </LimitedText>
        <Typography
          variant="button1"
          sx={{ textDecoration: "underline", mt: 1 }}
        >
          {label2}
        </Typography>
      </FooterStyled>
    </PanelStyled>
  );
};

export default Panel;

const LimitedText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "singleline",
})<{ singleline?: boolean | undefined }>`
  display: -webkit-box !important;
  -webkit-line-clamp: ${(props) => (props.singleline ? 1 : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  min-height: ${(props) => (props.singleline ? "auto" : "2.4em")};
`;

const PanelStyled = styled(Link)`
  display: block;
  aspect-ratio: 1/1;
  width: 100%;
  overflow: hidden;
`;

const FooterStyled = styled(Stack)`
  position: absolute;
  display: flex;
  align-content: stretch;
  bottom: 0;
  left: 0;
  color: #ffffff;
  z-index: 1;
  padding: 45px 40px;
  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
`;
