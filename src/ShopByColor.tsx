import { Stack, Chip, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const data = [
  { label: "Blue", hex: "#757fe1" },
  { label: "Orange", hex: "#eb7a16" },
  { label: "Red", hex: "#ee4644" },
  { label: "Green", hex: "#2c984f" },
  { label: "Teal", hex: "#91b4a0" },
  { label: "Purple", hex: "#53339a" },
  { label: "Aqua", hex: "#5be4d4" },
  { label: "Pink", hex: "#ed86ee" },
  { label: "Yellow", hex: "#e6d233" },
  { label: "Grey", hex: "#898989" },
  { label: "Brown", hex: "#926060" },
];

const ShopByColor = () => {
  return (
    <Stack
      gap={1.5}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      sx={{ py: 2, mt: 2 }}
    >
      {data.map((item, index) => (
        <ChipWrapper key={index} hex={item.hex} label={item.label} />
      ))}
    </Stack>
  );
};

export default ShopByColor;

const IconStyled = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #ffffff50;
`;

type Props = {
  hex: string;
  label: string;
};

const ChipWrapper = ({ hex, label }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const style = useSpring({
    scale: isHovered ? 10 : 1,
    immediate: !isHovered,
    config: {
      duration: 400,
    },
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Chip
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        py: 2.5,
        px: 0.5,
        borderRadius: 7,
        background: "#ffffff50",
        fontWeight: "bold",
        overflow: "hidden",
        cursor: "pointer",
      }}
      icon={
        <animated.span style={style as any}>
          <IconStyled color={hex} />
        </animated.span>
      }
      label={
        <Typography
          variant="body1"
          sx={{ pl: 0.5, fontWeight: "bold", color: "#ffffff" }}
        >
          {label}
        </Typography>
      }
      component="a"
      href="/"
    />
  );
};
