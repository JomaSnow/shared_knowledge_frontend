import styled from "styled-components";
import DesignObject from "../../helper/Design";

export const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-family: ${DesignObject.fontPrimary};
  font-size: 5rem;
  color: ${DesignObject.primary};
`;
