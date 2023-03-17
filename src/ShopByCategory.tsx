import { Stack, Chip, Typography } from "@mui/material";
import { animated } from "@react-spring/web";
import NecktieIcon from "./assets/icons-necktie.svg";
import BowtieIcon from "./assets/icons-bow-tie.svg";
import PocketSquareIcon from "./assets/icons-pocket-square.svg";
import TieclipIcon from "./assets/icons-tie-clip.svg";
import ScarveIcon from "./assets/icons-scarves.svg";
import BeltIcon from "./assets/icons-belts.svg";
import CravatIcon from "./assets/icons-cravats.svg";
import CummerbundIcon from "./assets/icons-cummerbunds.svg";
import FacemaskIcon from "./assets/icons-facemasks.svg";
import SockIcon from "./assets/icons-socks.svg";
import useAnimateIcon from "./hooks/useAnimateIcon";

const data = [
  {
    label: "Neckties",
    icon: <NecktieIcon />,
    href: "/neckties",
  },
  { label: "Bow Ties", icon: <BowtieIcon />, href: "/bowties" },
  {
    label: "Pocket Squares",
    icon: <PocketSquareIcon />,
    href: "/",
  },
  {
    label: "Tie Clips",
    icon: <TieclipIcon />,
    href: "/",
  },
  {
    label: "Scarves",
    icon: <ScarveIcon />,
    href: "/",
  },
  {
    label: "Lapel Pins",
    icon: <ScarveIcon />,
    href: "/",
  },
  {
    label: "Belts",
    icon: <BeltIcon />,
    href: "/",
  },
  {
    label: "Cravats",
    icon: <CravatIcon />,
    href: "/",
  },
  {
    label: "Cummerbunds",
    icon: <CummerbundIcon />,
    href: "/",
  },
  {
    label: "Facemasks",
    icon: <FacemaskIcon />,
    href: "/",
  },
  {
    label: "Socks",
    icon: <SockIcon />,
    href: "/",
  },
];

const ShopByCategory = () => {
  return (
    <Stack
      gap={{ xs: 1, md: 2 }}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        py: 5,
        "@media (max-width: 750px)": {
          py: 2,
        },
      }}
    >
      {data.map((item, index) => (
        <ChipWrapper key={index} {...item} />
      ))}
    </Stack>
  );
};

export default ShopByCategory;

type Props = {
  icon: any;
  label: string;
  href: string;
};

const ChipWrapper = ({ icon, label, href }: Props) => {
  const [style, animate] = useAnimateIcon({ rotate: 20, scale: 1 });
  return (
    <Chip
      onMouseEnter={animate as any}
      sx={{
        p: 3,
        borderRadius: 7,
        background: "#ffffff",
        cursor: "pointer",
        "@media (max-width: 750px)": {
          p: 2.5,
        },
      }}
      icon={<animated.span style={style as any}>{icon}</animated.span>}
      label={
        <Typography variant="nav" sx={{ pl: 1, fontWeight: "medium" }}>
          {label}
        </Typography>
      }
      component="a"
      href={href}
    />
  );
};
