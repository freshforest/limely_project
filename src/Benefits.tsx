import { Box, Grid, useMediaQuery } from "@mui/material";
import DeliveryIcon from "./assets/icon-delivery.svg";
import ReviewIcon from "./assets/icon-review.svg";
import SampleIcon from "./assets/icon-samples.svg";
import ReturnIcon from "./assets/icon-return.svg";
import Benefit from "./Benefit";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled";

const items = [
  {
    label1: "Free Delivery",
    label2: "on all UK orders",
    icon: <DeliveryIcon />,
  },
  {
    label1: "4.8 star Review",
    label2: "with Reviews.io",
    icon: <ReviewIcon />,
  },
  {
    label1: "Samples Available",
    label2: "on all our designs",
    icon: <SampleIcon />,
  },
  {
    label1: "60 Days Return",
    label2: "for refunds or exchange",
    icon: <ReturnIcon />,
  },
];

const Benefits = () => {
  const smallScreen = useMediaQuery("(max-width:800px)");
  return smallScreen ? (
    <MarqueeStyled>
      <Marquee gradient={false}>
        {items.map((item, index) => (
          <Box key={index} sx={{ px: 2, py: 3 }}>
            <Benefit
              icon={item.icon}
              label1={item.label1}
              label2={item.label2}
            />
          </Box>
        ))}
      </Marquee>
    </MarqueeStyled>
  ) : (
    <Grid
      container
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      spacing={3}
      sx={{ py: 3 }}
    >
      {items.map((item, index) => (
        <Grid key={index} item md={3}>
          <Benefit icon={item.icon} label1={item.label1} label2={item.label2} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Benefits;

const MarqueeStyled = styled.div`
  .marquee-container {
    overflow-x: visible !important;
  }
`;
