import styled from "styled-components";
import DesignObject from "../../helper/Design";

export const Background = styled.nav<{ showErr: boolean }>`
  display: "flex";
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  position: fixed;
  top: 0;
  left: 50%;
  width: 70vw;
  border-radius: 2rem;
  min-height: 2rem;
  padding: 1rem 2rem;
  margin: 6rem 0 1rem -35vw;
  background-color: ${DesignObject.accent};

  opacity: ${(props) => (props.showErr ? "1" : "0")};
  transition-duration: 500ms;
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 700;
  font-family: ${DesignObject.fontSecondary};
  color: ${DesignObject.light};
  margin: 0.5rem;
  text-align: center;
  cursor: default;
`;
