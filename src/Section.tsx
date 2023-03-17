import styled from "@emotion/styled";
import { CSSProperties } from "react";

type Props = {
  bg?: "black" | "white";
  tight?: boolean;
  children: any;
  style?: CSSProperties;
  overflowHidden?: boolean;
  element?: "header" | "footer";
};

const Section = ({
  bg,
  tight,
  children,
  style,
  overflowHidden,
  element,
}: Props) => {
  if (element === "header") {
    return (
      <HeaderStyled style={style} bg={bg}>
        <InnerStyled tight={tight} overflowHidden={overflowHidden}>
          {children}
        </InnerStyled>
      </HeaderStyled>
    );
  } else if (element === "footer") {
    return (
      <FooterStyled style={style} bg={bg}>
        <InnerStyled tight={tight} overflowHidden={overflowHidden}>
          {children}
        </InnerStyled>
      </FooterStyled>
    );
  }
  return (
    <SectionStyled style={style} bg={bg}>
      <InnerStyled tight={tight} overflowHidden={overflowHidden}>
        {children}
      </InnerStyled>
    </SectionStyled>
  );
};

export default Section;

const SectionStyled = styled.section<{ style?: CSSProperties; bg?: string }>`
  ${({ bg }) => bg === "white" && `background:#ffffff;`}
  ${({ bg }) => bg === "black" && `background:#212121;`}
  ${({ style }) => ({ ...style })}
`;

const HeaderStyled = styled.header<{ style?: CSSProperties; bg?: string }>`
  ${({ bg }) => bg === "white" && `background:#ffffff;`}
  ${({ bg }) => bg === "black" && `background:#212121;`}
  ${({ style }) => ({ ...style })}
`;

const FooterStyled = styled.footer<{ style?: CSSProperties; bg?: string }>`
  ${({ bg }) => bg === "white" && `background:#ffffff;`}
  ${({ bg }) => bg === "black" && `background:#212121;`}
  ${({ style }) => ({ ...style })}
`;

const InnerStyled = styled.div<{ tight?: boolean; overflowHidden?: boolean }>`
  max-width: ${(props) => (props.tight ? "1200px" : "1650px")};
  ${({ overflowHidden }) => overflowHidden && `overflow:hidden;`}
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
  z-index: 1;
`;
