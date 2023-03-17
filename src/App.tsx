import "./App.css";
import { Grid, Link, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import Header from "./Header";
import ShopByCategory from "./ShopByCategory";
import ShopByColor from "./ShopByColor";
import SectionHeader from "./SectionHeader";
import Panel from "./Panel";
import PanelMini from "./PanelMini";
import Benefits from "./Benefits";
import BannerHero from "./BannerHero";
import Article from "./Article";
import HeaderMini from "./HeaderMini";
import Footer from "./Footer";
import Section from "./Section";
import ReviewsIo from "./ReviewsIo";
import BannerRich from "./BannerRich";
import ProductGrid from "./ProductGrid";
import MegaMenu from "./MegaMenu";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Section bg="black">
        <HeaderMini />
      </Section>
      <Section bg="white" style={{ zIndex: 10 }} element="header">
        <Header />
        <MegaMenu />
      </Section>
      <Section tight overflowHidden>
        <Benefits />
      </Section>
      <Section>
        <BannerHero
          img="wedding-banner.jpg"
          label1={
            <>
              Wedding Ties to Match
              <br /> Every Theme
            </>
          }
          label2="With Over 3000 Styles To Pick From"
          label3="Shop Wedding Ties"
          href="/"
        />
        <Grid container spacing={1} style={{ paddingTop: "8px" }}>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/velvet-feature.jpg"
              label1="Velvet Ties, Bow Ties and Pocket Squares"
              label2="Shop Velvet"
              href="/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/prom-feature.jpg"
              label1="Get Ready For Prom Season"
              label2="Shop Prom"
              href="/"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/rocambolesco-feature.jpg"
              label1="Rocambolesco Inspired Designs - with some more text to show how it will truncate"
              label2="Shop Rocambolesco"
              href="/"
            />
          </Grid>
        </Grid>
      </Section>
      <Section tight>
        <ReviewsIo />
      </Section>
      <Section tight style={{ paddingTop: 15 }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Shop by Category
        </Typography>
        <ShopByCategory />
        <SectionHeader
          label="Our Most Popular Ties"
          href="/"
          hrefLabel="Shop All Popular"
        />
        <ProductGrid />
      </Section>
      <BannerRich
        img="/colour-banner.jpg"
        bg="#4f6358"
        href="/"
        content={
          <>
            <Typography variant="h2">Shop by Color</Typography>
            <Typography variant="nav" sx={{ mt: 1 }}>
              Explore our huge range of colors below:
            </Typography>
            <ShopByColor />
            <Link variant="button1" href="/" sx={{ mt: "auto" }}>
              Shop All Colors
            </Link>
          </>
        }
      />
      <Section tight style={{ paddingTop: 15 }}>
        <SectionHeader
          label="Our New Products"
          href="/"
          hrefLabel="Shop All New"
        />
        <ProductGrid short />
      </Section>
      <BannerRich
        img="future-flowers-banner.jpg"
        bg="#00427c"
        href="/"
        content={
          <>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              NEW COLLECTION
            </Typography>
            <Typography variant="h2">Future Flowers</Typography>
            <Typography variant="nav">A Ray of Snazzy Sunshine</Typography>
            <Link variant="button1" href="" sx={{ mt: "auto" }}>
              Shop the range
            </Link>
          </>
        }
      />
      <Section style={{ paddingTop: "8px" }}>
        <Grid container spacing={1}>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/neck-tie-feature.jpg"
              label1="Neck Ties"
              label2="Shop Neck Ties"
              href="/"
              singleline
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/bow-ties-feature.jpg"
              label1="Bow Ties"
              label2="Shop Bow Ties"
              href="/"
              singleline
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Panel
              img="/pocket-square-feature.jpg"
              label1="Pocket Square"
              label2="Shop Pocket Square"
              href="/"
              singleline
            />
          </Grid>
        </Grid>
      </Section>
      <Section tight style={{ marginTop: 30 }}>
        <SectionHeader label="Tie Knowledge" href="/" hrefLabel="See more" />
        <Grid container columnSpacing={1} rowSpacing={4}>
          <Grid item md={3} sm={4} xs={6}>
            <PanelMini img="/tie-a-tie.jpg" label="How to tie a tie" href="/" />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <PanelMini
              img="/tie-a-bow-tie.jpg"
              label="How to Tie a Bow Tie"
              href="/"
            />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <PanelMini img="/necktie-care.jpg" label="Neck Tie Care" href="/" />
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <PanelMini
              img="/necktie-history.jpg"
              label="Neck Tie History"
              href="/"
            />
          </Grid>
        </Grid>
        <Article />
      </Section>
      <Section tight>
        <ReviewsIo />
      </Section>
      <Section bg="black" tight element="footer">
        <Footer />
      </Section>
    </ThemeProvider>
  );
};

export default App;
