import { Box, Typography } from "@mui/material";

const ProductBanner = () => {
  return (
    <Box sx={{ background: "#ffffff", px: 5, py: 3, textAlign: "center" }}>
      <Typography variant="h3">Free delivery on all orders</Typography>
      <Typography variant="button2">Express Delivery also available</Typography>
    </Box>
  );
};

export default ProductBanner;
