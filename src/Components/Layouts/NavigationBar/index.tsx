import React from "react";
import {
  StyledHeader,
  Logo,
  Nav,
  NavLink,
} from "./style";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>My App</Logo>
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
    </StyledHeader>
  );
};

export default Header;