import styled from "@emotion/styled";
import { Typography, Rating, Link, Stack, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useAnimateIcon from "./hooks/useAnimateIcon";
import { animated } from "@react-spring/web";
import { useState } from "react";
import FadeIn from "./FadeIn";

type Props = {
  img: string;
  imgBack: string;
  label: string;
  price: string;
  rating: number;
  newProduct?: boolean;
  discounted?: string;
};

const Product = ({
  img,
  imgBack,
  label,
  price,
  rating,
  newProduct,
  discounted,
}: Props) => {
  const [style, animate] = useAnimateIcon({ rotate: 0, scale: 1.1 });
  const [imgHovered, setImgHovered] = useState(false);

  const handleMouseEnter = () => {
    setImgHovered(true);
  };

  const handleMouseLeave = () => {
    setImgHovered(false);
  };
  return (
    <ProductStyled>
      <HeaderStyled>
        <Stack flexDirection="row" gap={0.5}>
          {newProduct && <TagStyled color="#43719B">NEW</TagStyled>}
          {discounted && <TagStyled color="#EE4646">SALE</TagStyled>}
        </Stack>
        <IconButton
          sx={{
            background: "#f6f6f3",
            width: 50,
            height: 50,
            svg: { display: "block" },
            "&:hover": {
              color: "#ffffff",
              background: "#EE4646",
            },
          }}
          aria-label="add-to-favourites"
          onMouseEnter={animate as any}
          onClick={() => alert("add product to favourites")}
        >
          <animated.div style={style as any}>
            <FavoriteBorderIcon />
          </animated.div>
        </IconButton>
      </HeaderStyled>
      <Link href="/">
        <ImageWrapperStyled
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FadeIn active={imgHovered}>
            <ImageStyled src={imgBack} alt={label} loading="lazy" />
          </FadeIn>
          <FadeIn active={!imgHovered}>
            <ImageStyled src={img} alt={label} loading="lazy" />
          </FadeIn>
        </ImageWrapperStyled>
      </Link>
      <Typography variant="nav" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <Rating
        value={rating}
        size="small"
        readOnly
        sx={{
          py: 1.5,
          "& .MuiRating-iconFilled": {
            color: "#212121",
          },
        }}
      />
      {!discounted ? (
        <Typography variant="button1" sx={{ fontWeight: "bold" }}>
          {price}
        </Typography>
      ) : (
        <Stack flexDirection="row" alignItems="baseline" gap={1}>
          <Typography
            variant="button1"
            sx={{ color: "#EE4646", fontWeight: "bold" }}
          >
            {discounted}
          </Typography>
          <Typography
            variant="button2"
            sx={{ fontWeight: "bold", textDecoration: "line-through" }}
          >
            {price}
          </Typography>
        </Stack>
      )}
      <FooterStyled flexDirection="row" gap={4}>
        <Link href="/" variant="button2">
          View Product
        </Link>
        <Link href="/" variant="button2">
          Order Sample
        </Link>
      </FooterStyled>
    </ProductStyled>
  );
};

export default Product;

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;
  height: 100%;
  background: #ffffff;
`;

const HeaderStyled = styled(Stack)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  z-index: 10;
  width: 100%;
`;

const FooterStyled = styled(Stack)`
  margin-top: auto;
  padding-top: 10px;
  width: 100%;
  align-items: baseline;
`;

const TagStyled = styled.span<{ color: string }>`
  font-size: 13px;
  font-weight: medium;
  display: inline-flex;
  background: ${(props) => props.color};
  color: #ffffff;
  padding: 8px 16px;
`;

const ImageWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  height: 300px;
`;

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  max-width: 125px;
`;
