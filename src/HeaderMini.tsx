import styled from "@emotion/styled";
import { Stack, Link } from "@mui/material";

const HeaderMini = () => {
  return (
    <HeaderMiniStyled
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: 1,
        pb: 2,
      }}
    >
      <Stack gap={2} flexDirection="row" flexWrap="wrap" alignItems="center">
        <Link variant="tiny" href="tel:02037693726">
          020 3769 3726
        </Link>
        <Link variant="tiny" href="mailto:info@tieroom.co.uk">
          info@tieroom.co.uk
        </Link>
      </Stack>
      <Stack
        gap={2}
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Link variant="tiny" href="/">
          DELIVERY AND RETURNS
        </Link>
        <select
          style={{
            background: "none",
            color: "#ffffff",
            border: 0,
            fontSize: 10,
          }}
        >
          <option>🇬🇧 United Kingdom</option>
          <option>🇫🇷 France</option>
        </select>
      </Stack>
    </HeaderMiniStyled>
  );
};

export default HeaderMini;

const HeaderMiniStyled = styled(Stack)`
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
