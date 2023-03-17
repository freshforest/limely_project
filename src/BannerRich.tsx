import { Grid, Link, Stack } from "@mui/material";
import styled from "@emotion/styled";
import BackgroundImage from "./BackgroundImage";
import Section from "./Section";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  img: string;
  bg: string;
  href: string;
  content: any;
};

const BannerRich = ({ img, bg, href, content }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = useSpring({
    scale: isHovered ? 1.05 : 1,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Section>
      <Grid container flexDirection="row-reverse">
        <Grid item xl={8} md={6} xs={12}>
          <BackgroundWrapperStyled
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
              <BackgroundImage img={img} alt="alt text" />
            </animated.div>
          </BackgroundWrapperStyled>
        </Grid>
        <Grid item xl={4} md={6} xs={12}>
          <ContentStyled sx={{ background: bg }}>{content}</ContentStyled>
        </Grid>
      </Grid>
    </Section>
  );
};

export default BannerRich;

const ContentStyled = styled(Stack)`
  height: 100%;
  a,
  & {
    color: #ffffff;
  }

  padding: 75px;
  @media (max-width: 1050px) {
    padding: 45px;
    @media (max-width: 1050px) {
      padding: 30px;
    }
  }
`;

const BackgroundWrapperStyled = styled(Link)`
  display: block;
  aspect-ratio: 2/1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
