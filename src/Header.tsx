import { useState } from "react";
import {
  Stack,
  Box,
  Link,
  TextField,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import BasketIcon from "./assets/icon-basket.svg";
import HeartIcon from "./assets/icon-heart.svg";
import AccountIcon from "./assets/icon-account.svg";
import SearchIcon from "./assets/icon-search.svg";
import HeaderLink from "./HeaderLink";

const links = [
  { icon: <AccountIcon /> },
  { icon: <HeartIcon /> },
  { icon: <BasketIcon /> },
];

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <HeaderStyled container rowSpacing={1}>
      <Grid
        id="search"
        item
        xs={12}
        header={4}
        component={Stack}
        justifyContent="flex-start"
        alignItems="center"
      >
        <TextField
          size="small"
          placeholder="Search our products"
          sx={{ width: "100%", maxWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Grid>
      <Grid
        id="logo"
        item
        xs={6}
        header={4}
        component={Stack}
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/">
          <Box component="img" src="logo.svg" />
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        header={4}
        component={Stack}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Stack
          gap={2}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(undefined)}
            >
              <HeaderLink icon={link.icon} hoveredIndex={hoveredIndex} />
            </div>
          ))}
          <Button
            id="menu"
            onClick={() => alert("functionality not yet implemented")}
            sx={{
              mr: -2,
              ml: -1,
            }}
          >
            <MenuIcon />
          </Button>
        </Stack>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled(Grid)`
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid #00000020;

  @media (max-width: 950px) {
    padding: 5px 0;
    #search {
      order: 3;
      margin: 15px 0;
      @media (max-width: 500px) {
        margin: 5px 0;
      }
    }

    #logo {
      justify-content: flex-start;
      img {
        max-width: 150px;
      }
    }

    @media (max-width: 750px) {
      border-bottom: 0;
    }
  }

  #menu {
    display: none;
    @media (max-width: 750px) {
      display: flex;
    }
  }
`;
