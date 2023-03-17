import { useState } from "react";
import styled from "@emotion/styled";
import { Link, Stack, Typography } from "@mui/material";
import BackgroundImage from "./BackgroundImage";

const links = [
  { label: "here is a nice link about ties" },
  { label: "and another one" },
  { label: "and another" },
  { label: "yet another" },
  { label: "last one" },
];

type Props = {
  title: string;
  color?: string;
};

const MenuIndividual = ({ title, color }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setIsHovered(true);
  };

  const handleClose = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <ButtonStyled isHovered={isHovered}>
        <Link
          variant="nav"
          href="/"
          sx={{ display: "block", color, px: 2, py: 2 }}
        >
          {title}
        </Link>
      </ButtonStyled>
      {isHovered && (
        <PopoutStyled>
          <Stack flexDirection="row" gap={2}>
            <ImageContainer>
              <BackgroundImage img="necktie-care.jpg" alt="ties" />
            </ImageContainer>
            <Stack gap={1} sx={{ p: 3 }}>
              <Typography variant="nav">By Color</Typography>
              {links.map((link, index) => (
                <Link
                  key={index}
                  variant="body2"
                  color="secondary"
                  href="/"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
            <Stack gap={1} sx={{ p: 3 }}>
              <Typography variant="nav">By Category</Typography>
              {links.map((link, index) => (
                <Link
                  key={index}
                  variant="body2"
                  color="secondary"
                  href="/"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
            <Stack gap={1} sx={{ p: 3 }}>
              <Typography variant="nav">Popular</Typography>
              {links.map((link, index) => (
                <Link
                  key={index}
                  variant="body2"
                  color="secondary"
                  href="/"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </PopoutStyled>
      )}
    </div>
  );
};

export default MenuIndividual;

const PopoutStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-50%);
  background: #f6f6f3;
  box-shadow: #21212150 0px 4px 12px;
`;

const ButtonStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isHovered",
})<{ isHovered: boolean }>`
  display: block;
  a {
    text-decoration: none;
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% - 10px);
    width: 100%;
    height: 20px;
    background: #f6f6f3;
    z-index: 10;
  }

  ${({ isHovered }) =>
    isHovered &&
    `background: #f6f6f3;
    &::after {
      display: block;
    }`}
`;

const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  width: 225px;
  height: 225px;
`;
