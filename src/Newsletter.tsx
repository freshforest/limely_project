import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  styled,
  Button,
} from "@mui/material";
import PinterestIcon from "./assets/pinterest.svg";
import FacebookIcon from "./assets/facebook.svg";
import InstagramIcon from "./assets/instagram.svg";
import SubmitIcon from "./assets/submit.svg";

const Newsletter = () => {
  return (
    <Stack flexDirection="column">
      <HeadingStyled variant="nav">Signup to our newsletter</HeadingStyled>
      <Typography variant="body2" sx={{ color: "#ffffff80", mb: 1 }}>
        Get inspired, Get informed, Become a part of our community.
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Your Email Address"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button
                variant="contained"
                startIcon={<SubmitIcon />}
                sx={{ textTransform: "none" }}
              >
                Submit
              </Button>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: "#ffffff" },
        }}
        size="small"
        sx={{
          my: 1,
          input: { color: "#ffffff", p: 2 },
          "& input::placeholder": { color: "#ffffff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#ffffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
        }}
      />
      <Typography variant="body2" sx={{ color: "#ffffff80" }}>
        by submitting you agree to our <a href="/">privacy policy</a>
      </Typography>
      <Stack flexDirection="row" gap={2} sx={{ mt: 3 }}>
        <IconButton
          href="/"
          aria-label="pinterest"
          sx={{ border: "1px solid #ffffff", width: 50, height: 50 }}
        >
          <PinterestIcon />
        </IconButton>
        <IconButton
          href="/"
          aria-label="facebook"
          sx={{ border: "1px solid #ffffff", width: 50, height: 50 }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="/"
          aria-label="instagram"
          sx={{ border: "1px solid #ffffff", width: 50, height: 50 }}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Newsletter;

const HeadingStyled = styled(Typography)`
  display: block;
  font-weight: bold;
  color: #ffffff;
`;
