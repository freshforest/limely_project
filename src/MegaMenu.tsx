import { Stack, styled } from "@mui/material";
import MenuIndividual from "./MenuIndividual";

const MegaMenu = () => {
  return (
    <MegaMenuStyled
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <MenuIndividual title="Ties" />
      <MenuIndividual title="Bow Ties" />
      <MenuIndividual title="Pocket Square" />
      <MenuIndividual title="Accessories" />
      <MenuIndividual title="Collections" />
      <MenuIndividual title="Sale" color="#EE4646" />
    </MegaMenuStyled>
  );
};

export default MegaMenu;

const MegaMenuStyled = styled(Stack)`
  @media (max-width: 750px) {
    display: none;
  }
`;
