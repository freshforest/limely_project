import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";

type Props = {
  icon: any;
  label1: string;
  label2: string;
};

const Benefit = ({ icon, label1, label2 }: Props) => {
  return (
    <BenefitStyled gap={2}>
      <IconWrapperStyled>{icon}</IconWrapperStyled>
      <Stack>
        <Typography
          variant="body1"
          sx={{ color: "#000000", fontWeight: "medium" }}
        >
          {label1}
        </Typography>
        <Typography variant="body2">{label2}</Typography>
      </Stack>
    </BenefitStyled>
  );
};

export default Benefit;

const BenefitStyled = styled(Stack)`
  flex-direction: row;
`;

const IconWrapperStyled = styled.div`
  svg {
    max-width: 30px;
    max-height: 30px;
  }
`;
