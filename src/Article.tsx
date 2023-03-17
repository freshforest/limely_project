import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";

const Article = () => {
  return (
    <Grid component="article" spacing={2} container sx={{ my: 4 }}>
      <Grid item md={6} sm={12}>
        <FigureStyled>
          <ImageStyled src="/content-image.jpg" loading="lazy" />
        </FigureStyled>
      </Grid>
      <Grid item md={6} sm={12}>
        <ContentStyled>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Classy Neckties Since 2009
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="/">Praesentium consequatur </a> iusto debitis est
            repudiandae exercitationem ducimus suscipit veritatis, explicabo et
            ut inventore alias recusandae, qui perferendis nulla quas iure
            aliquid cum numquam deserunt. Unde quod, molestiae fugit.
          </Typography>
          <br />
          <Typography variant="h3" sx={{ mb: 2 }}>
            Experience an Almost Psychotic Attention to Detail
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consequatur iusto debitis est repudiandae exercitationem ducimus
            suscipit veritatis, explicabo et ut inventore alias recusandae, qui
            perferendis nulla quas iure aliquid cum numquam deserunt. Unde quod,
            molestiae fugit, consequatur ut obcaecati placeat laborum dolorem
            odit dignissimos.
          </Typography>
        </ContentStyled>
      </Grid>
    </Grid>
  );
};

export default Article;

const FigureStyled = styled.figure`
  margin: 0;
`;

const ContentStyled = styled.main`
  max-width: 450px;
  padding: 45px 15px;

  margin: 0 auto;
  @media (max-width: 750px) {
    padding: 45px 0;
    margin: initial;
  }
`;

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
`;
