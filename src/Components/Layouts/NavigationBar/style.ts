import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.a`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
