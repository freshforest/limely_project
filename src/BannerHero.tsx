import styled from "@emotion/styled";
import { Link, Stack, Typography } from "@mui/material";
import BackgroundImage from "./BackgroundImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  img: string;
  label1: any;
  label2: string;
  label3: string;
  href: string;
};

const BannerHero = ({ img, label1, label2, label3, href }: Props) => {
  const smallScreen = useMediaQuery("(max-width:800px)");
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
    <BannerHeroStyled
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      overflowHidden={!smallScreen}
    >
      {smallScreen ? (
        <ImageStyled>
          <BackgroundImage img={img} alt={label1} />
        </ImageStyled>
      ) : (
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
          <ImageStyled>
            <BackgroundImage img={img} alt={label1} tint />
          </ImageStyled>
        </animated.div>
      )}
      <ContentStyled>
        <Typography variant="h1">{label1}</Typography>
        <Typography variant="button1" sx={{ fontWeight: "bold", mt: 3 }}>
          {label2}
        </Typography>
        <Typography
          variant="button1"
          sx={{ textDecoration: "underline", mt: "auto", pt: 3 }}
        >
          {label3}
        </Typography>
      </ContentStyled>
    </BannerHeroStyled>
  );
};

export default BannerHero;

const BannerHeroStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "overflowHidden",
})<{ overflowHidden?: boolean }>`
  width: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  aspect-ratio: 2.4/1;
  ${({ overflowHidden }) => overflowHidden && `overflow: hidden;`}
  @media (max-width: 1000px) {
    aspect-ratio: 2/1.2;
  }
`;

const ImageStyled = styled.figure`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    position: relative;
    width: auto;
    height: auto;
    aspect-ratio: 2/1;
    width: 100%;
  }
`;

const ContentStyled = styled(Stack)`
  text-align: center;
  width: 100%;
  z-index: 10;
  min-height: 350px;
  @media (max-width: 1000px) {
    min-height: initial;

    @media (max-width: 800px) {
      background: #c2d4df;
      padding: 30px 15px;
      font-size: 1rem;
    }
  }
`;
