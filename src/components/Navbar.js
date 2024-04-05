import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;

  &.active {
    font-weight: bold;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Company Logo" />
      <NavItem to="/" exact>
        Home
      </NavItem>
      <NavItem to="/tariff-calculator">Tariff Calculator</NavItem>
      <NavItem to="/contact">Contact Us</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;