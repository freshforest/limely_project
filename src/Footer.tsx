import styled from "@emotion/styled";
import { Grid, Link, Stack, Typography } from "@mui/material";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <FooterStyled>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Grid container component="nav" spacing={5}>
            <Grid item lg={4}>
              <HeadingStyled variant="nav">Shop With Us</HeadingStyled>
              <Stack flexDirection="column" gap={1} sx={{ mb: 4 }}>
                <NavItemStyled href="/" variant="button2">
                  Neckties
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Bow Ties
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Pocket Squares
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Accessories
                </NavItemStyled>
              </Stack>
              <HeadingStyled variant="nav">B2B</HeadingStyled>
              <Stack flexDirection="column" gap={1}>
                <NavItemStyled href="/" variant="button2">
                  Custom Neckties
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Safety Neckties
                </NavItemStyled>
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <HeadingStyled variant="nav">Tie Knowledge</HeadingStyled>
              <Stack flexDirection="column" gap={1}>
                <NavItemStyled href="/" variant="button2">
                  Dress codes
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Necktie Ettiquite
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Match Your Necktie
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  How To Tie a Tie
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  How To Tie a Bow Tie
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Necktie Care
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Necktie History
                </NavItemStyled>
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <HeadingStyled variant="nav">Company</HeadingStyled>
              <Stack flexDirection="column" gap={1}>
                <NavItemStyled href="/" variant="button2">
                  About Us
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Shipping
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Returns
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Contact Us
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Blog
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Privacy Policy
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Cookie Policy
                </NavItemStyled>
                <NavItemStyled href="/" variant="button2">
                  Terms and Conditions
                </NavItemStyled>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Newsletter />
        </Grid>
      </Grid>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  padding: 60px 0;
`;

const HeadingStyled = styled(Typography)`
  display: block;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
`;

const NavItemStyled = styled(Link)`
  color: #ffffff80;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
