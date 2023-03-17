import styled from "@emotion/styled";

type Props = {
  img: string;
  alt: string;
  tint?: boolean;
  gradient?: boolean;
};

const BackgroundImage = ({ img, alt, tint, gradient }: Props) => {
  return (
    <BackgroundImageStyled tint={tint} gradient={gradient}>
      <ImgStyled src={img} alt={alt} loading="lazy" />
    </BackgroundImageStyled>
  );
};

export default BackgroundImage;

const ImgStyled = styled.img`
  display: block;
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const BackgroundImageStyled = styled.div<{
  tint?: boolean;
  gradient?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ tint, gradient }) =>
    tint &&
    `&::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${
      gradient
        ? "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 70%)"
        : "rgba(0, 0, 0, 0.35)"
    };
    z-index:1;
  }`}
`;
