import { Link, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  label: string;
  href: string;
  hrefLabel: string;
};

const SectionHeader = ({ label, href, hrefLabel }: Props) => {
  return (
    <SectionHeaderStyled
      sx={{ py: 5 }}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Typography variant="h2">{label}</Typography>
      <Link variant="button1" href={href}>
        {hrefLabel}
      </Link>
    </SectionHeaderStyled>
  );
};

export default SectionHeader;

const SectionHeaderStyled = styled(Stack)``;
