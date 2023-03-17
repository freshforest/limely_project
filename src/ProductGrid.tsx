import { Grid, Paper, styled } from "@mui/material";
import Product from "./Product";
import ProductBanner from "./ProductBanner";

type Props = {
  short?: boolean;
};

const ProductGrid = ({ short }: Props) => {
  return (
    <ProductGridStyled
      container
      spacing={{ xs: 1, md: 4 }}
      alignItems="stretch"
    >
      <Grid item md={4} sm={6} xs={12}>
        <Product
          img="/tarna-mint-front.jpeg"
          imgBack="/tarna-mint-back.jpeg"
          price="£25.00"
          rating={3}
          label="Bittersweet Coffee Classic Self-tied Boys Tie"
          newProduct
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Product
          img="/tjohej-light-blue-front.jpeg"
          imgBack="/tjohej-light-blue-back.jpeg"
          price="£25.00"
          rating={3}
          label="Some Other Classic Tie"
          newProduct
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Product
          img="/intermixed-brown-front.jpeg"
          imgBack="/intermixed-brown-back.jpeg"
          price="£25.00"
          rating={3}
          label="Some Other Classic Tie"
          discounted="£12.00"
        />
      </Grid>
      {!short && (
        <>
          <Grid item xs={12}>
            <ProductBanner />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Product
              img="/tarna-mint-front.jpeg"
              imgBack="/tarna-mint-back.jpeg"
              price="£25.00"
              rating={3}
              label="Some Other Classic Tie"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Product
              img="/tjohej-light-blue-front.jpeg"
              imgBack="/tjohej-light-blue-back.jpeg"
              price="£25.00"
              discounted="£13.50"
              rating={3}
              label="Some Other Classic Tie"
              newProduct
            />
          </Grid>
        </>
      )}
    </ProductGridStyled>
  );
};

export default ProductGrid;

const ProductGridStyled = styled(Grid)`
  margin-bottom: 48px;
`;
