import { NavbarBackground, LogoArea, NavLink, NavigationArea } from "./styles";

const Display = () => {
  return (
    <NavbarBackground>
      <LogoArea>
        <NavLink to="/">Logo</NavLink>
      </LogoArea>
      <NavigationArea>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/authentication">Login</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </NavigationArea>
    </NavbarBackground>
  );
};

export default Display;
