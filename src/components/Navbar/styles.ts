import styled from "styled-components";
import DesignObject from "../../helper/Design";
import { Link } from "react-router-dom";

export const NavbarBackground = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 2rem;
  padding: 1rem 2rem;
  margin: 0 0 1rem;
  background-color: ${DesignObject.secondary};
`;

export const LogoArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const NavigationArea = styled.div`
  display: flex;
  flex: 8;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  font-family: ${DesignObject.fontSecondary};
  color: ${DesignObject.dark};
  margin: 0.5rem;
`;
